import * as types from "./action.type";
import axios from "axios";

export const loginUser = (payload) => (dispatch) => {
  dispatch({ type: types.Login_User_Request });
  return axios
    .post("/signin", payload)
    .then((res) => {
      if (res.data.status) {
        return dispatch({
          type: types.Login_User_Success,
          payload: res.data.token,
        });
      } else {
        return dispatch({
          type: types.Login_User_Failure,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => dispatch({ type: types.Login_User_Failure }));
};

export const signUpUser = (payload) => (dispatch) => {
  dispatch({ type: types.Signup_User_Request });
  return axios
    .post("/signup", payload)
    .then((res) => {
      if (res.data.status) {
        return dispatch({
          type: types.Signup_User_Success,
        });
      } else {
        return dispatch({
          type: types.Signup_User_Failure,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => dispatch({ type: types.Signup_User_Failure }));
};

export const sessionUser = (payload) => (dispatch) => {
  dispatch({ type: types.Session_User_Request });
  return axios
    .get("/session", {
      headers: {
        token: payload,
      },
    })
    .then((res) => {
      if (res.data.status) {
        return dispatch({
          type: types.Session_User_Success,
          payload: res.data,
        });
      } else {
        return dispatch({
          type: types.Session_User_Failure,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => dispatch({ type: types.Session_User_Failure }));
};
