import * as types from "./action.type";
import axios from "axios";

export const loginUser = (payload) => (dispatch) => {
  dispatch({ type: types.Login_User_Request });
  return axios
    .post("/signin", payload)
    .then((res) => {
      return dispatch({
        type: types.Login_User_Success,
        payload: res.data,
      });
    })
    .catch((err) => dispatch({ type: types.Login_User_Failure }));
};
