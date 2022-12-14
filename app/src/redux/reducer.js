import * as types from "./action.type";
import { loadData, saveData } from "../utils/localStorage";
const initalState = {
  isLoading: false,
  isError: false,
  isAuth: loadData("isAuth") || false,
  token: loadData("token") || "",
  user: [],
  video: [],
  singleVideo: [],
  userList: [],
  plan: [],
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

    case types.Video_Upload_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Video_Upload_Success:
      return {
        ...state,
        isLoading: false,
      };
    case types.Video_Upload_Failure:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.Logout_Success:
      saveData("token", "");
      saveData("isAuth", false);
      return {
        ...state,
        isAuth: false,
      };

    case types.Get_Video_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Get_Video_Success:
      return {
        ...state,
        isLoading: false,
        video: payload.data,
      };
    case types.Get_Video_Failure:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.Get_Video_Single_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Get_Video_Single_Success:
      return {
        ...state,
        isLoading: false,
        singleVideo: payload.data,
      };
    case types.Get_Video_Single_Failure:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.Get_Friends_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Get_Friends_Success:
      return {
        ...state,
        isLoading: false,
        userList: payload.data,
      };
    case types.Get_Friends_Failure:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    // Post_Plan_Request
    // Update_Post_Plan_Request
    // Delete_Post_Plan_Request

    case types.Post_Plan_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Post_Plan_Success:
      return {
        ...state,
        isLoading: false,
      };
    case types.Post_Plan_Failure:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.Update_Post_Plan_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Update_Post_Plan_Success:
      return {
        ...state,
        isLoading: false,
      };
    case types.Update_Post_Plan_Failure:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.Delete_Post_Plan_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Delete_Post_Plan_Success:
      return {
        ...state,
        isLoading: false,
      };
    case types.Delete_Post_Plan_Failure:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.Get_Plan_Success:
      return {
        ...state,
        isLoading: false,
        plan: payload.data,
      };

    // Buy_Plan_Request
    case types.Buy_Plan_Success:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
