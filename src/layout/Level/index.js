import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
import Button from "../../components/Button";
import { useHistory } from "react-router";

const Level = () => {
  let history = useHistory();

  const startEasy = () => {
    history.push("/game");
  };

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <div style={{width: '60%'}}></div>
      </S.Header>
      <S.Content>
        <Button color={"secondary"} onClick={startEasy}>Fácil</Button>
        <Button color={"secondary"}>Médio</Button>
        <Button color={"secondary"}>Difícil</Button>
      </S.Content>
      <div style={{height: '13vh'}}>
      </div>
    </S.Wrapper>
  );
};

export default Level;
