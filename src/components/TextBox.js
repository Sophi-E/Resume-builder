import React from "react";
import styled from "@emotion/styled";

const TextBox = ({ label, placeholder, onChange, value, name, rows, cols }) => {
  return (
    <>
      <StyledLabel>
        {label}
        <StyledTextBox
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          rows={rows}
          cols={cols}
        />
      </StyledLabel>
    </>
  );
};

export default TextBox;

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  padding: 0.4em;
  color: #a2a2b3;
  font-weight: bold;
`;
const StyledTextBox = styled.textarea`
  width: 100%;
  display: block;
  padding: 0.5em;
  border: none;
  background: #f2f5fa;
  :focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
`;
