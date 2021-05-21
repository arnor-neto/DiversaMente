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
      <img style={{width: '11px', marginRight: '8px'}} src={BackIcon} alt={"left arrow icon"} />
      <p style={{paddingBottom: '2px'}}>Voltar</p>
    </S.Wrapper>
  );
};

export default ReturnButton;