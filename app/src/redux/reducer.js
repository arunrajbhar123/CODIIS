import * as types from "./action.type";

const initalState = {
  isLoading: false,
  isError: false,
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
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.Login_User_Failure:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    default:
      return state;
  }
};
