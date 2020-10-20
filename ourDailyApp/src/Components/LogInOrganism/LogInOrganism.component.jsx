import React from "react";
import S from "./LogInOrganism.style";

// import LogInForm from "../Forms/LogInForm/LogInForm.component";
import LogInForm from "../../Containers/LogInForm.container";

import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

const LogInOrganism = () => {
  return (
    <React.Fragment>
      {/* // ============== Log In Form wrapper==============  */}
      <S.LogInFormWrapper>
        <LogInForm />
      </S.LogInFormWrapper>
    </React.Fragment>
  );
};

export default LogInOrganism;
