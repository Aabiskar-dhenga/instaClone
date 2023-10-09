import { createContext, useReducer } from "react";
export let UserDetailContext = createContext();
let UserDetail = {
  userInfo: {},
};
let reducer = (state, action) => {
  switch (action.type) {
    case "setUserInfo":
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export let UserContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, UserDetail);
  return (
    <UserDetailContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDetailContext.Provider>
  );
};
