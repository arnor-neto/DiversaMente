import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const InitialState = {
  nickname: sessionStorage.getItem("nickname"),
};

export const GlobalContext = ({ children }) => {
  const [nickname, setNickname] = useState(InitialState.nickname);

  const store = {
    nickname: { get: nickname, set: setNickname },
  };

  useEffect(() => {
    sessionStorage.setItem("nickname", nickname);
  }, [nickname]);

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
