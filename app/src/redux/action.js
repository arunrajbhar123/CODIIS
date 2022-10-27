import * as types from "./action.type";
import axios from "axios";
import { loadData } from "../utils/localStorage";
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

export const videoUpload = (payload) => (dispatch) => {
  dispatch({ type: types.Video_Upload_Request });

  return axios
    .post("/video", payload, {
      headers: {
        token: loadData("token"),
      },
    })
    .then((res) => {
      if (res.data.status) {
        return dispatch({
          type: types.Video_Upload_Success,
          payload: res.data,
        });
      } else {
        return dispatch({
          type: types.Video_Upload_Failure,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => dispatch({ type: types.Video_Upload_Failure }));
};

export const logoutFun = (payload) => (dispatch) => {
  return dispatch({
    type: types.Logout_Success,
  });
};

export const getVideo = (payload) => (dispatch) => {
  dispatch({ type: types.Get_Video_Request });

  return axios
    .get("/video", {
      headers: {
        token: loadData("token"),
      },
    })
    .then((res) => {
      if (res.data.status) {
        return dispatch({
          type: types.Get_Video_Success,
          payload: res.data,
        });
      } else {
        return dispatch({
          type: types.Get_Video_Failure,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => dispatch({ type: types.Get_Video_Failure }));
};

export const getSingleVideo = (payload) => (dispatch) => {
  dispatch({ type: types.Get_Video_Single_Request });
console.log(payload);
  return axios
    .get("/video/:id", {
      headers: {
        token: loadData("token"),
      },
    })
    .then((res) => {
      if (res.data.status) {
        return dispatch({
          type: types.Get_Video_Single_Success,
          payload: res.data,
        });
      } else {
        return dispatch({
          type: types.Get_Video_Single_Failure,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => dispatch({ type: types.Get_Video_Single_Failure }));
};
