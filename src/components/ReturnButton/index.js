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
      <img style={{width: '8px', marginRight: '12px'}} src={BackIcon} alt={"left arrow icon"} />
      <S.Text>Voltar</S.Text>
    </S.Wrapper>
  );
};

export default ReturnButton;