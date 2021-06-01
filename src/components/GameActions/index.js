import * as S from "./styled";
import RestartIcon from "../../assets/RestartIcon.png";
import QuestionIcon from "../../assets/QuestionIcon.png";

/**
 * Contains the restart and help options that appear ingame.
 * Component used on the Game page.
 */

const GameActions = ({handleRestart, handleHelp}) => {

  return (
    <S.Wrapper>
      <S.Clickable onClick={handleRestart}>
        <img style={{width: '1.2rem', marginRight: '16px'}} src={RestartIcon} alt={"Reiniciar jogo"} />
      </S.Clickable>
      <S.Clickable onClick={handleHelp}>
        <img style={{width: '1.35rem'}}src={QuestionIcon} alt={"Como jogar"} />
      </S.Clickable>
    </S.Wrapper>
  );
};

export default GameActions;
