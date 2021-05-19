import * as S from "./styled";
import BackIcon from "../../assets/LeftArrow.png";
import { useHistory } from "react-router";

const ReturnButton = ({action = 'return'}) => {
  let history = useHistory();

  const handleClick = () => {
    action === 'return' ? history.goBack() : action();
  }
  return (
    <S.Wrapper onClick={handleClick}>
      <img src={BackIcon} alt={"left arrow icon"} />
      <p>Voltar</p>
    </S.Wrapper>
  );
};

export default ReturnButton;