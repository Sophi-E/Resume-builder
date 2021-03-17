import axios from "axios";
import { setAlert } from "./alert";

import { CLEAR_RESUME, GET_RESUME, RESUME_ERROR, UPDATE_RESUME } from "./types";

//Get resume
export const getResume = () => async (dispatch) => {
  dispatch({ type: CLEAR_RESUME });
  try {
    const res = await axios.get(
      "https://gentle-headland-28953.herokuapp.com/api/resume/me"
    );
    dispatch({
      type: GET_RESUME,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RESUME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get Profile by Id
export const getResumeById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/https://gentle-headland-28953.herokuapp.com/api/resume/user/${userId}`
    );
    dispatch({
      type: GET_RESUME,
      payload: res.data,
    });
  } catch (err) {
    console.log("err response", err);
    dispatch({
      type: RESUME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Create or update resume
export const createResume = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "https://gentle-headland-28953.herokuapp.com/api/resume",
      formData,
      config
    );

    dispatch({
      type: GET_RESUME,
      payload: res.data,
    });
    dispatch(setAlert(edit ? "Resume Updated" : "Resume Created", "success"));

    if (!edit) {
      history.push("/add-experience");
    }
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: RESUME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Experience
export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "https://gentle-headland-28953.herokuapp.com/api/resume/experience",
      formData,
      config
    );

    dispatch({
      type: UPDATE_RESUME,
      payload: res.data,
    });
    dispatch(setAlert("Experience Added"));

    // history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: RESUME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Education
export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "https://gentle-headland-28953.herokuapp.com/api/resume/education",
      formData,
      config
    );

    dispatch({
      type: UPDATE_RESUME,
      payload: res.data,
    });
    dispatch(setAlert("Education Added"));
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: RESUME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
