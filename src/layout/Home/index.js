import * as S from "./styled";
import { Context } from "../../GlobalContext";
import { useContext } from "react";

const Home = () => {
  const context = useContext(Context);

  return (
    <S.Wrapper>
      <h1>Olá, {context.nickname.get}</h1>
      <button>Jogar</button>
      <button>Glossário</button>
      <button>Notícias</button>
      <a href="https://google.com">Sobre a ideia</a>
    </S.Wrapper>
  );
};

export default Home;
