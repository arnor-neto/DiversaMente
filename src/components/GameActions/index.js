import * as S from "./styled";
import RestartIcon from "../../assets/RestartIcon.png";
import QuestionIcon from "../../assets/QuestionIcon.png";

const GameActions = ({handleHelp}) => {
  const restart = () => {
    window.location.reload();
  };

  return (
    <S.Wrapper>
      <S.Clickable onClick={restart}>
        <img style={{width: '1.2rem', marginRight: '8px'}} src={RestartIcon} alt={"Reiniciar jogo"} />
      </S.Clickable>
      <S.Clickable onClick={handleHelp}>
        <img style={{width: '1.2rem', marginRight: '8px'}}src={QuestionIcon} alt={"Como jogar"} />
      </S.Clickable>
    </S.Wrapper>
  );
};

export default GameActions;
