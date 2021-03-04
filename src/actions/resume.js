import axios from "axios";
import { setAlert } from "./alert";

import { GET_RESUME, RESUME_ERROR } from "./types";

//Get resume
export const getResume = () => async (dispatch) => {
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
      history.push("/dashboard");
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
