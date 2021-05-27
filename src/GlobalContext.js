import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const InitialState = {
  nickname: localStorage.getItem("nickname"),
  difficulty: localStorage.getItem("difficulty"),
  selectedCardID: localStorage.getItem("selectedCardID"),
  mediumUnlocked: localStorage.getItem("mediumUnlocked") || "false",
  hardUnlocked: localStorage.getItem("hardUnlocked") || "false",
};

export const GlobalContext = ({ children }) => {
  const [nickname, setNickname] = useState(InitialState.nickname);
  const [difficulty, setDifficulty] = useState(InitialState.difficulty);
  const [selectedCardID, setSelectedCardID] = useState(InitialState.selectedCardID);
  const [mediumUnlocked, setMediumUnlocked] = useState(InitialState.mediumUnlocked);
  const [hardUnlocked, setHardUnlocked] = useState(InitialState.hardUnlocked);

  const store = {
    nickname: { get: nickname, set: setNickname },
    difficulty: { get: difficulty, set: setDifficulty },
    selectedCardID: {get: selectedCardID, set: setSelectedCardID},
    mediumUnlocked: {get: mediumUnlocked, set: setMediumUnlocked},
    hardUnlocked: {get: hardUnlocked, set: setHardUnlocked}
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

  useEffect(() => {
    localStorage.setItem("mediumUnlocked", mediumUnlocked);
  }, [mediumUnlocked]);

  useEffect(() => {
    localStorage.setItem("hardUnlocked", hardUnlocked);
  }, [hardUnlocked]);

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
