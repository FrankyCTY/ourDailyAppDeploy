import React from "react";
import {ToolBar} from "../Components/Compound Components";
import useRouter from "../hooks/useRouter.hooks";
import PixelSpinner from "../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";



const SettingToolBar = () => {
    
    const router = useRouter();

    return (
        <ToolBar >
            <ToolBar.Btn className={`${router.pathName === "/settings/profile" && "active"}`} onClick={() => router.push("/settings/profile")}><ToolBar.BtnIcon className="iconfont icon-profile1" /></ToolBar.Btn>
            <ToolBar.Btn className={`${router.pathName === "/settings/changePassword" && "active"}`} onClick={() => router.push("/settings/changePassword")}><ToolBar.BtnIcon className="iconfont icon-key"/></ToolBar.Btn>
            <ToolBar.Btn className={`${router.pathName === "/settings/deleteMe" && "active"}`} onClick={() => router.push("/settings/deleteMe")}><ToolBar.BtnIcon className="iconfont icon-line-deleteuser"/></ToolBar.Btn>
        </ToolBar>
    )
}

export default SettingToolBar;