import React from "react";
import S from "./OauthBtn.style";

import PropTypes from "prop-types";

const OauthBtn = ({ SvgComponent, children, ...otherProps }) => {
  //@importedBy LogInOrganism SignUpOrganism

  return (
    <S.OauthBtn styled_provider={children} {...otherProps}>
      <SvgComponent className="styled-svg" />
      Continue with {children}
    </S.OauthBtn>
  );
};

OauthBtn.propTypes = {
  SvgComponent: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

export default OauthBtn;
