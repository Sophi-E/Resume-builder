import React from "react";
import styled from "@emotion/styled";

const Input = ({ label, type, placeholder, onChange, value, name }) => {
  return (
    <>
      <StyledLabel>
        {label}
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      </StyledLabel>
    </>
  );
};

export default Input;

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  padding: 0.4em;
  color: #a2a2b3;
  font-weight: bold;
`;
const StyledInput = styled.input`
  width: 100%;
  display: block;
  padding: 0.7em;
  border-radius: 4px;
  border: none;
  background: #f2f5fa;
  :focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
`;
