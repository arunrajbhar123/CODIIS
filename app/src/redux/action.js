import * as types from "./action.type";
import axios from "axios";

export const saveuser = (payload) => (dispatch) => {
  dispatch({ type: types.Save_User_Request });
  return axios
    .post("https://mock15word.herokuapp.com/user", payload)
    .then((res) => {
      return dispatch({
        type: types.Save_User_Success,
        payload: res.data,
      });
    })
    .catch((err) => dispatch({ type: types.Save_User_Failure }));
};

export const getAllUser = (payload) => (dispatch) => {
  dispatch({ type: types.All_user_Request });

  return axios
    .get("https://mock15word.herokuapp.com/data")
    .then((res) => {
      return dispatch({
        type: types.All_user_Success,
        payload: res.data,
      });
    })
    .catch((err) => dispatch({ type: types.All_user_Failure }));
};

export const getWord = (payload) => (dispatch) => {
  dispatch({ type: types.Get_Question_Request });

  return axios
    .get("https://api.api-ninjas.com/v1/randomword")
    .then((res) => {
      return dispatch({
        type: types.Get_Question_Success,
        payload: res.data.word,
      });
    })
    .catch((err) => dispatch({ type: types.Get_Question_Failure }));
};

export const ScoreUpdate = (payload) => (dispatch) => {
  dispatch({
    type: types.Score_Save_Request,
  });
  console.log(payload);
  return axios
    .post("https://mock15word.herokuapp.com/data", payload)
    .then((res) => {
      return dispatch({
        type: types.Score_Save_Success,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.Score_Save_Failure,
      });
    });
};

export const initTest = (payload) => (dispatch) => {
  dispatch({
    type: types.Init_Test_Request,
  });
  return dispatch({
    type: types.Init_Test_Success,
    payload,
  });
};

export const countIncrease = (payload) => (dispatch) => {
  dispatch({
    type: types.score_count_increase,
    payload,
  });
};
