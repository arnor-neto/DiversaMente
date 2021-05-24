import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import { useContext } from "react";
import { Context } from "../../GlobalContext";

const Level = () => {
  let history = useHistory();
  const context = useContext(Context);

  const startEasy = () => {
    context.difficulty.set("easy");
    history.push("/game");
  };

  const startMedium = () => {
    context.difficulty.set("medium");
    history.push("/game");
  };

  const startHard = () => {
    context.difficulty.set("hard");
    history.push("/game");
  };

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <div style={{ width: "60%" }}></div>
      </S.Header>
      <S.Content>
        <Button color={"secondary"} onClick={startEasy}>
          Fácil
        </Button>
        <Button color={"secondary"} onClick={startMedium}>
          Médio
        </Button>
        <Button color={"secondary"} onClick={startHard}>
          Difícil
        </Button>
      </S.Content>
      <div style={{ height: "13vh" }}></div>
    </S.Wrapper>
  );
};

export default Level;
