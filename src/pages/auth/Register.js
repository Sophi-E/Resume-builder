import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import Input from "../../components/Input";
import StyledWrapperDiv from "../../components/StyledWrapper";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <StyledWrapperDiv>
      <form onSubmit={onSubmit}>
        <Input
          label="Name"
          type="text"
          placeholder="johndoe@test.com"
          name="name"
          value={name}
          onChange={onChange}
        />
        <Input
          label="Email"
          type="email"
          placeholder="johndoe@test.com"
          name="email"
          value={email}
          onChange={onChange}
        />
        <Input
          label="Password"
          type="password"
          placeholder="*******"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="*******"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="login">Log In</Link>
      </p>
    </StyledWrapperDiv>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
