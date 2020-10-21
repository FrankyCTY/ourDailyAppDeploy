import React, {useState} from "react";
import ProfileContainer from "../../Containers/ProfileForm.container";
import TestContainer from "../../Containers/Test.container";
import SettingToolBar from "../../Containers/SettingToolBarContainer";
import {SideMenu, Formik} from "../../Components/Compound Components";
import { useMediaQuery } from "react-responsive";
import PixelSpinner from "../../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";


import { Route, Switch, Redirect } from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";
import { useSelector, useDispatch } from "react-redux";
import {changeUserPasswordStart} from "../../redux/User/user.actions";

const SettingsPage = () => {

  const width_above_1280 = useMediaQuery({ query: "(min-width: 1280px" });

  const router = useRouter();

  console.log(router.pathName);

  return (
    <div className="py-16 md:pt-24">
      <div className="flex justify-center mx-auto xl:w-4/5">
      {width_above_1280 ? <SideMenu className="mr-24" style={{height: "647px"}}>
          <SideMenu.SideMenuItem className={`${router.pathName === "/settings/profile" && "active"}`} onClick={() => router.push("/settings/profile")}>
            <SideMenu.ItemIcon className="iconfont icon-profile1 mr-2" />
            <SideMenu.ItemText className="itemtext">Profile</SideMenu.ItemText>
          </SideMenu.SideMenuItem>
          <SideMenu.SideMenuItem className={`${router.pathName === "/settings/changePassword" && "active"}`} onClick={() => router.push("/settings/changePassword")}>
            <SideMenu.ItemIcon className="iconfont icon-key mr-2" />
            <SideMenu.ItemText className="itemtext">Change password</SideMenu.ItemText>
          </SideMenu.SideMenuItem>
          <SideMenu.SideMenuItem className={`${router.pathName === "/settings/deleteMe" && "active"}`} onClick={() => router.push("/settings/deleteMe")}>
            <SideMenu.ItemIcon className="iconfont icon-line-deleteuser mr-2" />
            <SideMenu.ItemText className="itemtext">Delete account</SideMenu.ItemText>
          </SideMenu.SideMenuItem>
        </SideMenu> : <SettingToolBar/>}

        <div className="w-3/4 max-w-xl">
          <Switch>
            <Route exact path={`${router.matchPath}`}><Redirect to={{pathname: `${router.matchPath}/profile`}}/></Route>
            <Route exact path={`${router.matchPath}/profile`}><ProfileContainer/></Route>
            <Route exact path={`${router.matchPath}/changePassword`}><ChangePasswordForm/></Route>
            <Route exact path={`${router.matchPath}/deleteMe`}><TestContainer/></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

const ChangePasswordForm = () => {

  const dispatch = useDispatch();
  const isChangingUserPassword = useSelector(state => state.user.isChangingUserPassword);
  const [changePwFormDetails, setChangePwFormDetails] = useState({password: "", newPassword: "", confirmNewPassword: ""});

  const {password, newPassword, confirmNewPassword} = changePwFormDetails;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setChangePwFormDetails((prevChangePwFormDetails) => ({
      ...prevChangePwFormDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(changeUserPasswordStart(changePwFormDetails));
  }

  return (
  <Formik>
    <Formik.Group>
      <Formik.Label htmlFor="password">Current password</Formik.Label>
      <Formik.Input value={password} type="password" id="password" name="password" onChange={handleInputChange}/>
      <Formik.InputDecoIcon className="iconfont icon-eye1"/>
    </Formik.Group>
    <Formik.Group>
      <Formik.Label htmlFor="newPassword">New password</Formik.Label>
      <Formik.Input value={newPassword} type="password" id="newPassword" name="newPassword" onChange={handleInputChange}/>
      <Formik.InputDecoIcon className="iconfont icon-eye1"/>
    </Formik.Group>
    <Formik.Group>
      <Formik.Label htmlFor="confirmNewPassword">Confirm new password</Formik.Label>
      <Formik.Input value={confirmNewPassword} type="password" id="confirmNewPassword" name="confirmNewPassword" onChange={handleInputChange}/>
    </Formik.Group>
    <Formik.CustomSubmitBtn onSubmit={handleSubmit} disabled={isChangingUserPassword} type="submit" variant="contained" color="primary" 
             className="col-span-2 justify-self-start mt-5">Save{isChangingUserPassword && <PixelSpinner size={1.2} animationDuration={1500} style={{marginLeft: "4px"}}/>}</Formik.CustomSubmitBtn>
  </Formik>)
}

export default SettingsPage;
