import React, {useState} from "react";
import "./SettingsPage.scss";
import ProfileContainer from "../../Containers/ProfileForm.container";
import AppearanceContainer from "../../Containers/Appearance/Appearance.container";
import ThemeContainer from "../../Containers/Theme/Theme.container";
import { CSSTransition } from "react-transition-group";
import SettingToolBar from "../../Containers/SettingToolBarContainer";
import {SideMenu, Formik, Notification, WholePageLoader} from "../../Components/Compound Components";
import { useMediaQuery } from "react-responsive";
import PixelSpinner from "../../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";

import {UploadImageProvider} from "../../context/uploadAvatar.context";

import { Route, Switch, Redirect } from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";
import { useSelector, useDispatch } from "react-redux";
import UserActions from "../../redux/User/user.actions";

const SettingsPage = () => {

  const width_above_1280 = useMediaQuery({ query: "(min-width: 1280px" });

  const router = useRouter();

  return (
    <div className="py-16 md:pt-24">
      <div className="flex justify-center mx-auto xl:w-4/5">
      {width_above_1280 ? <SideMenu className="mr-24" style={{height: "647px"}}>
          <SideMenu.SideMenuItem className={`${router.pathName === "/settings/profile" && "active"}`} onClick={() => router.push("/settings/profile")}>
            <SideMenu.ItemIcon className="iconfont icon-profile1 mr-2" />
            <SideMenu.ItemText className="itemtext">Profile</SideMenu.ItemText>
          </SideMenu.SideMenuItem>
          <SideMenu.SideMenuItem className={`${router.pathName === "/settings/appearance" && "active"}`} onClick={() => router.push("/settings/appearance")}>
            <SideMenu.ItemIcon className="iconfont icon-highlight mr-2" />
            <SideMenu.ItemText className="itemtext">Appearance</SideMenu.ItemText>
          </SideMenu.SideMenuItem>
          <SideMenu.SideMenuItem className={`${router.pathName === "/settings/theme" && "active"}`} onClick={() => router.push("/settings/theme")}>
            <SideMenu.ItemIcon className="iconfont icon-DarkTheme mr-2" />
            <SideMenu.ItemText className="itemtext">Theme</SideMenu.ItemText>
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
            <Route exact path={`${router.matchPath}/appearance`}><UploadImageProvider><AppearanceContainer/></UploadImageProvider></Route>
            <Route exact path={`${router.matchPath}/theme`}><UploadImageProvider><ThemeContainer/></UploadImageProvider></Route>
            <Route exact path={`${router.matchPath}/changePassword`}><ChangePasswordForm/></Route>
            <Route exact path={`${router.matchPath}/deleteMe`}><DeleteMeForm/></Route>
            <Route><Redirect to="/404"/></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

const ChangePasswordForm = () => {

  const dispatch = useDispatch();
  const isChangingUserPassword = useSelector(state => state.user.isChangingUserPassword);
  const changePasswordAlert = useSelector(state => state.user.changePasswordAlert);
  const showChangePasswordMsg = useSelector(state => state.user.showChangePasswordMsg);

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
    // @planToImplement Should have used front end validation to prevent
    // too many requests to backend
    if(!showChangePasswordMsg) {
      dispatch(UserActions.changeUserPasswordStart(changePwFormDetails));
    }
  }

  return (
  <Formik>
    <Formik.PasswordInput htmlFor="password"
    value={password} id="password" name="password" onChange={handleInputChange}
    >Password</Formik.PasswordInput>

    <Formik.PasswordInput htmlFor="newPassword"
    value={newPassword} id="newPassword" name="newPassword" onChange={handleInputChange}
    >New password</Formik.PasswordInput>

    <Formik.PasswordInput htmlFor="confirmNewPassword"
    value={confirmNewPassword} id="confirmNewPassword" name="confirmNewPassword" onChange={handleInputChange}
    >Confirm new password</Formik.PasswordInput>

    <Formik.CustomSubmitBtn onClick={handleSubmit} disabled={isChangingUserPassword} type="submit" variant="contained" color="primary" 
             className="col-span-2 justify-self-start mt-5">Save{isChangingUserPassword && <PixelSpinner size={1.2} animationDuration={1500} style={{marginLeft: "4px"}}/>}</Formik.CustomSubmitBtn>
    
    <Notification type={`${changePasswordAlert && changePasswordAlert.startsWith("Successfully") ? "success" : "error"}`}
     className={`${showChangePasswordMsg && "show"}`}>{changePasswordAlert}
     </Notification>
  </Formik>)
}

const DeleteMeForm = () => {

  const isDeletingMe = useSelector(state => state.user.isDeletingMe);
  const wholePageLoaderBigText = useSelector(state => state.wholePageLoader.bigText);
  const [isChecked, toggleIsChecked] = useState(false);
  const [deleteMeWithoutChecked, setDeleteMeWithoutChecked] = useState(false);
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const spinnerColor = theme === "dark" ? "#F8F8F8" : "#303030";

  const handleDeleteMe = () => {
    // Start Deleting User only if checkbox is checked
    if(isChecked) {
      dispatch(UserActions.deleteMeStart());
    }
    else {
      // Notification logic
      setDeleteMeWithoutChecked(true);
      setTimeout(() => {
        setDeleteMeWithoutChecked(false);
      }, 2500);
    }
  }

  return (<div>
    <h2 className="text-2xl mb-4" style={{color: "red"}}>WARNING</h2>
    <ul>
      <li className="mb-2"><span className="iconfont icon-cc-pointer-right mr-2 text-blue-700"/><span className="text-sm text-blue-700">You will no longer be able to log in this account</span></li>
      <li className="mb-16 md:mb-32"><span className="iconfont icon-cc-pointer-right mr-2 text-blue-700"/><span className="text-sm text-blue-700">You will not be able to register a new account with the same email address</span></li>
    </ul>
    <Formik.CustomCheckBox onClick={() => toggleIsChecked(!isChecked)} checked={isChecked}>I understand the risk of deleting my account.</Formik.CustomCheckBox>
    <Formik.CustomSubmitBtn onClick={handleDeleteMe} className="mt-6 px-4 text-gray-100">Delete Me</Formik.CustomSubmitBtn>
    <Notification type="error"
      className={`${deleteMeWithoutChecked && "show"}`}>Please check the checkbox to proceed.
      </Notification>
    {/* Delete Me Process Loader */}
    <CSSTransition in={isDeletingMe} timeout={250} classNames="loader-primary" unmountOnExit>
      <div className="loader">
        <WholePageLoader.DefaultLoader spinnerColor={spinnerColor} size={5} animationDuration={1000}>{wholePageLoaderBigText}</WholePageLoader.DefaultLoader>
      </div>
    </CSSTransition>
    </div>
  )
}

export default SettingsPage;
