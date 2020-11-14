import React from "react";
import {Todo, Form} from "../";
import {useDispatch} from "react-redux";
import {setViewAs} from "../../../redux/Auth/auth.actions";
import {capitalizeFirstLetter} from "../../../utils/stringManipulator";
import useAccessControl from "../../../hooks/useAccessControl.hooks";
import S from "./styles/floatBar.style";

export default function FloatBar({ direction="top", position="absolute", children, ...otherProps }) {
    return <S.FloatBarContainer direction={direction} position={position} {...otherProps}>{children}</S.FloatBarContainer>;
}

// Sets
FloatBar.ViewAsFloatBar = function ViewAsFloatBar({viewAsRole, children}) {

  const dispatch = useDispatch();
  const {role} = useAccessControl();

  const renderRoleIcon = () => {
    switch(viewAsRole) {
      case "User":
        return <i className="iconfont icon-users px-2"></i>
      case "original":
        return <i className="iconfont icon-key px-2"></i>
      default:
        break;
    }
  }

  const renderCurrentViewAs = () => {
    return viewAsRole === "original" ? `${capitalizeFirstLetter(role)}` : viewAsRole;
  }

  const onSwitchViewAs = () => {
    const newViewAs = viewAsRole === "original" || viewAsRole === "Admin" ? "User" : "original";
    dispatch(setViewAs(newViewAs));
  }
  

  return <FloatBar direction="bottom" position="fixed" className="flex items-center justify-between py-3 md:py-6">
    <Form.Text className="text-xs">You are viewing as:{renderRoleIcon()}{renderCurrentViewAs()}</Form.Text>
    <Form.LogInBtn className="mt-0" onClick={onSwitchViewAs}>Switch View</Form.LogInBtn>
    {children}
  </FloatBar>
} 