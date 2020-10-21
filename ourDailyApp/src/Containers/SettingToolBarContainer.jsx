import React from "react";
import {ToolBar} from "../Components/Compound Components";
import useRouter from "../hooks/useRouter.hooks";


const SettingToolBar = () => {
    
    const router = useRouter();

    return (
        <ToolBar >
            <ToolBar.Btn className="active" onClick={() => router.push("/settings/profile")}><ToolBar.BtnIcon className="iconfont icon-profile1" /></ToolBar.Btn>
            <ToolBar.Btn onClick={() => router.push("/settings/test")}><ToolBar.BtnIcon className="iconfont icon-key"/></ToolBar.Btn>
            <ToolBar.Btn><ToolBar.BtnIcon className="iconfont icon-line-deleteuser"/></ToolBar.Btn>
        </ToolBar>
    )
}

export default SettingToolBar;