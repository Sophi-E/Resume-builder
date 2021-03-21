import React from "react";
import styled from "@emotion/styled";

const StyledWrapper = ({ children }) => {
  return <StyledWrapperDiv>{children}</StyledWrapperDiv>;
};

export default StyledWrapper;

const StyledWrapperDiv = styled.div`
  padding: 2em 20em;
`;
