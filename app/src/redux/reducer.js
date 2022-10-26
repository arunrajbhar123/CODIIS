import * as types from "./action.type";
import { loadData, saveData } from "../utils/localStorage";
const initalState = {
  isLoading: false,
  isError: false,
  isAuth: loadData("isAuth") || false,
  token: loadData("token") || "",
  user: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.Login_User_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Login_User_Success:
      saveData("token", payload);
      saveData("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case types.Login_User_Failure:
      saveData("token", "");
      saveData("isAuth", false);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
      };

    case types.Signup_User_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Signup_User_Success:
      return {
        ...state,
        isLoading: false,
      };
    case types.Signup_User_Failure:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.Session_User_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Session_User_Success:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        data: payload.data,
      };
    case types.Session_User_Failure:
      saveData("token", "");
      saveData("isAuth", false);
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isError: false,
      };

    default:
      return state;
  }
};
