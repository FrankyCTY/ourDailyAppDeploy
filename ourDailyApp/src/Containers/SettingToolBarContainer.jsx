import React, {useState} from "react";
import {ToolBar} from "../Components/Compound Components";
import useRouter from "../hooks/useRouter.hooks";
import { useMediaQuery } from "react-responsive";



const SettingToolBar = () => {

    const allowToExpand = useMediaQuery({ query: "(max-width: 480px" });
    const [shouldExpand, toggleShouldExpand] = useState(false);
    
    const router = useRouter();

    return (
        <ToolBar className={`${shouldExpand ? "expanded" : ""}`}>
            <ToolBar.Btn className={`${router.pathName === "/settings/profile" && "active"}`} onClick={() => router.push("/settings/profile")}><ToolBar.BtnIcon className="iconfont icon-profile1" /></ToolBar.Btn>
            <ToolBar.Btn className={`${router.pathName === "/settings/appearance" && "active"}`} onClick={() => router.push("/settings/appearance")}><ToolBar.BtnIcon className="iconfont icon-highlight"/></ToolBar.Btn>
            <ToolBar.Btn className={`${router.pathName === "/settings/theme" && "active"}`} onClick={() => router.push("/settings/theme")}><ToolBar.BtnIcon className="iconfont icon-DarkTheme"/></ToolBar.Btn>
            {allowToExpand && <ToolBar.Btn onClick={() => toggleShouldExpand(!shouldExpand)}><ToolBar.BtnIcon className="iconfont icon-More"/></ToolBar.Btn>}
            <ToolBar.Btn className={`${router.pathName === "/settings/changePassword" && "active"}`} onClick={() => router.push("/settings/changePassword")}><ToolBar.BtnIcon className="iconfont icon-key"/></ToolBar.Btn>
            <ToolBar.Btn className={`${router.pathName === "/settings/deleteMe" && "active"}`} onClick={() => router.push("/settings/deleteMe")}><ToolBar.BtnIcon className="iconfont icon-line-deleteuser"/></ToolBar.Btn>
        </ToolBar>
    )
}

export default SettingToolBar;