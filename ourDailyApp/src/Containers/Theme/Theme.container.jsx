import React from "react";
import S from "./Theme.style";
import {FormGroup, Switch} from "@material-ui/core";
import useTheme from "../../hooks/useTheme.hooks";

const ThemeContainer = () => {
    const {theme, onThemeChange} = useTheme();

    return <FormGroup>
        <S.FormControlLabel
        control={<Switch checked={theme === "dark"} onChange={onThemeChange} />}
        label={`${theme === "dark" ? "Dark mode" : "Light mode"}`}
        />
  </FormGroup>
}

export default ThemeContainer;