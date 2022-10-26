import * as types from "./action.type";

const initalState = {
  isLoading: false,
  isError: false,
  score: 0,
  name: "" ,
  level: "",
  words: "",
  users: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.All_user_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.All_user_Success:
      return {
        ...state,
        users: payload,
        isLoading: false,
        isError: false,
      };

    case types.All_user_Failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.Get_Question_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.Get_Question_Success:
      return {
        ...state,
        words: payload,
        isLoading: false,
        isError: false,
      };

    case types.Get_Question_Failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.Score_Save_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.Score_Save_Success:
      return {
        ...state,
       
        isLoading: false,
        isError: false,
      };

    case types.Score_Save_Failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.Init_Test_Request:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.Init_Test_Success:
      return {
        ...state,
        name: payload.name,
        level: payload.level,
        isLoading: false,
        isError: true,
      };

    case types.score_count_increase:
      return {
        ...state,
        score: payload,
      };

    default:
      return state;
  }
};
