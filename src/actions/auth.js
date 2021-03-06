import axios from "axios";
import {
  REGISTER_FAIL,
  USER_LOADED,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_RESUME,
} from "./types";
import authToken from "../utils/authToken";
import { setAlert } from "./alert";

//Get user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    authToken(localStorage.token);
  }

  try {
    const res = await axios.get(
      "https://gentle-headland-28953.herokuapp.com/api/auth"
    );
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

//Register user
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(
      "https://gentle-headland-28953.herokuapp.com/api/users",
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

//Log in User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "https://gentle-headland-28953.herokuapp.com/api/auth",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

//Logout user
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_RESUME });
  dispatch({ type: LOGOUT });
};
