import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const InitialState = {
  nickname: localStorage.getItem("nickname"),
  difficulty: sessionStorage.getItem("difficulty"),
};

export const GlobalContext = ({ children }) => {
  const [nickname, setNickname] = useState(InitialState.nickname);
  const [difficulty, setDifficulty] = useState(InitialState.difficulty);

  const store = {
    nickname: { get: nickname, set: setNickname },
    difficulty: { get: difficulty, set: setDifficulty },
  };

  useEffect(() => {
    localStorage.setItem("nickname", nickname);
  }, [nickname]);

  useEffect(() => {
    sessionStorage.setItem("difficulty", difficulty);
  }, [difficulty]);

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
