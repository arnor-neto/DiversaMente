import * as S from "./styled";
import { Context } from "../../GlobalContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const context = useContext(Context);

  const toLevel = () => {
    history.push("/level");
  };

  const toAbout = () => {
    history.push("/about");
  };

  const toGallery = () => {
    history.push("/gallery");
  };

  return (
    <S.Wrapper>
      <h1>Olá, {context.nickname.get}</h1>
      <button onClick={toLevel}>Jogar</button>
      <button onClick={toGallery}>Glossário</button>
      <button>Notícias</button>
      <p onClick={toAbout}>Sobre a ideia</p>
    </S.Wrapper>
  );
};

export default Home;
