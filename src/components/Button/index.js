import * as S from "./styled";

const Button = ({ onClick, children, color = "primary" }) => {
  return (
    <S.Button onClick={onClick} color={color}>
      {children}
    </S.Button>
  );
};

export default Button;
