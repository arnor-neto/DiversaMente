import * as S from "./styled";
import Button from "../../components/Button";
import InfoIcon from "../../assets/InfoIcon.png";
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

  const toNews = () => {
    history.push("/news");
  };

  return (
    <S.Wrapper>
      <div style={{ height: "20vh" }} />
      <S.Wrapper>
        <S.Title>Olá, {context.nickname.get}</S.Title>
        <Button color={"secondary"} onClick={toLevel}>
          Jogar
        </Button>
        <Button color={"secondary"} onClick={toGallery}>
          Glossário
        </Button>
        <Button color={"secondary"} onClick={toNews}>
          Notícias
        </Button>
      </S.Wrapper>
      <S.AboutFooter>
        <img
          style={{ width: "1.1rem", marginRight: "8px" }}
          src={InfoIcon}
          alt={"info"}
        />
        <p onClick={toAbout}>Sobre a ideia</p>
      </S.AboutFooter>
    </S.Wrapper>
  );
};

export default Home;
