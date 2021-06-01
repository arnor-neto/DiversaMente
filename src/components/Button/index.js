import * as S from "./styled";

/**
 * Default app button.
 * Can be customized with default button props and especial props
 */

const Button = ({ onClick, children, color = "primary", size = "big", style}) => {
  return (
    <S.Button style={{...style}} onClick={onClick} color={color} size={size}>
      {children}
    </S.Button>
  );
};

export default Button;
