import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const InitialState = {
  nickname: localStorage.getItem("nickname"),
  difficulty: localStorage.getItem("difficulty"),
  selectedCardID: localStorage.getItem("selectedCardID")
};

export const GlobalContext = ({ children }) => {
  const [nickname, setNickname] = useState(InitialState.nickname);
  const [difficulty, setDifficulty] = useState(InitialState.difficulty);
  const [selectedCardID, setSelectedCardID] = useState(InitialState.selectedCardID);

  const store = {
    nickname: { get: nickname, set: setNickname },
    difficulty: { get: difficulty, set: setDifficulty },
    selectedCardID: {get: selectedCardID, set: setSelectedCardID}
  };

  useEffect(() => {
    localStorage.setItem("nickname", nickname);
  }, [nickname]);

  useEffect(() => {
    localStorage.setItem("difficulty", difficulty);
  }, [difficulty]);

  useEffect(() => {
    localStorage.setItem("selectedCardID", selectedCardID);
  }, [selectedCardID]);

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
