import styled from "styled-components";
import {FormGroup, FormControlLabel, Switch} from "@material-ui/core";

const S = {};

S.FormControlLabel = styled(FormControlLabel)`
.MuiSwitch-colorSecondary {
  color: #0059a6 !important;
}
.MuiSwitch-track {
  background: #0059a6 !important;
  color: #0059a6 !important;
}

color: ${({theme}) => theme.general_text}
`;


// // MuiIconButton-root PrivateSwitchBase-root-1 MuiSwitch-switchBase MuiSwitch-colorSecondary PrivateSwitchBase-checked-2 Mui-checked

export default S;