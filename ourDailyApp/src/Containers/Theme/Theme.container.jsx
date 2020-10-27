import React from "react";
import S from "./Theme.style";
import {FormGroup, FormControlLabel, Switch} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";

import {setTheme} from "../../redux/Theme/theme.actions";

const ThemeContainer = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme_P.theme);

    const onThemeChange = () => {
        theme === "dark" ? dispatch(setTheme("light")) : dispatch(setTheme("dark"));
    }

    return <FormGroup>
        <S.FormControlLabel
        control={<Switch checked={theme === "dark"} onChange={onThemeChange} />}
        label={`${theme === "dark" ? "Dark mode" : "Light mode"}`}
        />
  </FormGroup>
}

export default ThemeContainer;