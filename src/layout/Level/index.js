import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import { useContext } from "react";
import { Context } from "../../GlobalContext";

const Level = () => {
  let history = useHistory();
  const context = useContext(Context);

  const toHome = () => {
    history.push("/home");
  };

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
        <ReturnButton action={toHome} />
        <div style={{ width: "60%" }}></div>
      </S.Header>
      <S.Content>
        <Button
          style={{ marginBottom: "16px" }}
          color={"secondary"}
          onClick={startEasy}
        >
          Fácil
        </Button>
        {context.mediumUnlocked.get ? (
          <Button
            style={{ marginBottom: "16px" }}
            color={"secondary"}
            onClick={startMedium}
          >
            Médio
          </Button>
        ) : (
          <Button
            style={{
              marginBottom: "16px",
              color: "#51224C",
              border: "1px solid #51224C",
              cursor: "default",
            }}
            color={"secondary"}
          >
            Médio
          </Button>
        )}
        {context.hardUnlocked.get ? (
          <Button color={"secondary"} onClick={startHard}>
            Difícil
          </Button>
        ) : (
          <Button
            style={{
              color: "#51224C",
              border: "1px solid #51224C",
              cursor: "default",
            }}
            color={"secondary"}
          >
            Difícil
          </Button>
        )}
      </S.Content>
      <div style={{ height: "13vh" }}></div>
    </S.Wrapper>
  );
};

export default Level;
