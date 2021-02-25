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
`;
const StyledInput = styled.input`
  width: 100%;
  display: block;
  padding: 0.5em;
  border: none;

  ::focus {
    border: none;
  }
`;
