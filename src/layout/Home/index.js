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
      <div style={{ height: "15vh" }} />
      <S.Content>
        <S.Title>Olá, {context.nickname.get}</S.Title>
        <Button
          style={{ marginBottom: "16px" }}
          color={"secondary"}
          onClick={toLevel}
        >
          Jogar
        </Button>
        <Button
          style={{ marginBottom: "16px" }}
          color={"secondary"}
          onClick={toGallery}
        >
          Glossário
        </Button>
        <Button color={"secondary"} onClick={toNews}>
          Notícias
        </Button>
      </S.Content>
      <S.AboutFooter>
        <S.AboutLink onClick={toAbout}>
          <img
            style={{ width: "18px", marginRight: "8px" }}
            src={InfoIcon}
            alt={"info"}
          />
          <p style={{ color: "#F2F2F2", fontWeight: 300, marginTop: '18px'}}>Sobre a ideia</p>
        </S.AboutLink>
      </S.AboutFooter>
    </S.Wrapper>
  );
};

export default Home;
