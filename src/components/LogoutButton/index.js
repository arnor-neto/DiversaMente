import * as S from "./styled";
import LogoutIcon from "../../assets/LogoutIcon.png";
import { useHistory } from "react-router";

/**
 * Handles app logout. Directs user to landing page.
 * Component used on Home page.
 */

const ReturnButton = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  }
  return (
    <S.Wrapper onClick={handleClick}>
      <img style={{width: '18px', marginRight: '12px'}} src={LogoutIcon} alt={"Logout"} />
      <S.Text>Sair</S.Text>
    </S.Wrapper>
  );
};

export default ReturnButton;