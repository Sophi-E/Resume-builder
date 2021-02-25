import React from "react";
import styled from "@emotion/styled";

import ResumeUi from "./ResumeUi";

const Templates = () => {
  return (
    <>
      <h2>Choose a template</h2>
      <StyledTemplateContainer>
        <ResumeUi />
        <ResumeUi />
        <ResumeUi />
      </StyledTemplateContainer>
    </>
  );
};

export default Templates;

const StyledTemplateContainer = styled.div`
  width: 100%;
  display: flex;
`;
