import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
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
        <div style={{width: '55%'}}></div>
      </S.Header>
      <S.Content>
        <button onClick={startEasy}>Fácil</button>
        <button>Médio</button>
        <button>Difícil</button>
      </S.Content>
    </S.Wrapper>
  );
};

export default Level;
