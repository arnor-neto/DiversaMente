import * as S from "./styled";
import { Context } from "../../GlobalContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const context = useContext(Context);

  const toLevel = () => {
    history.push("/level")
  }

  return (
    <S.Wrapper>
      <h1>Olá, {context.nickname.get}</h1>
      <button onClick={toLevel}>Jogar</button>
      <button>Glossário</button>
      <button>Notícias</button>
      <a href="https://google.com">Sobre a ideia</a>
    </S.Wrapper>
  );
};

export default Home;
