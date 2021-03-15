import {
  CLEAR_RESUME,
  GET_RESUME,
  RESUME_ERROR,
  UPDATE_RESUME,
} from "../actions/types";

const initialState = {
  resume: null,
  resumes: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_RESUME:
    case UPDATE_RESUME:
      return {
        ...state,
        resume: payload,
        loading: false,
      };

    case CLEAR_RESUME:
      return {
        ...state,
        resume: null,
        loading: false,
      };
    case RESUME_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
