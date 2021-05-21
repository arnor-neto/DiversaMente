import * as S from "./styled";

const Button = ({ onClick, children, color = "primary", size = "big" }) => {
  return (
    <S.Button onClick={onClick} color={color} size={size}>
      {children}
    </S.Button>
  );
};

export default Button;
