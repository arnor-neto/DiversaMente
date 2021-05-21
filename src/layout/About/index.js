import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
import { useHistory } from "react-router-dom";

const About = () => {
  let history = useHistory();

  const toLevel = () => {
    history.push("/level");
  };

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <S.Title>Sobre a ideia</S.Title>
        <div style={{width: '11%'}}/>
      </S.Header>
      <S.Content>
        <S.P>
          O jogo surgiu de um desafio proposto pela ioasys na segunda fase de
          seu Camp. A equipe tinha como tema a diversidade, devendo desenvolver
          uma aplicação Web e Mobile em cima disso.
        </S.P>
        <S.P>
          Com o objetivo de contribuir com o compartilhamento de informações
          básicas sobre a diversidade de gênero, visando estimular o interesse
          no assunto e diminuir o preconceito enraizado, decidimos que nossa
          solução seria uma aplicação Mobile First voltada para educação da
          diversidade de gênero através de um jogo de memória.
        </S.P>
        <S.P>
          Incentivando o ensino sobre a diversidade de gênero de forma leve e
          divertida.
        </S.P>
        <button onClick={toLevel}>Jogar</button>
      </S.Content>
    </S.Wrapper>
  );
};

export default About;
