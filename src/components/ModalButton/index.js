import * as S from "./styled";

const ModalButton = ({ onClick, children, color = "primary", size = "big", style}) => {
  return (
    <S.Button style={{...style}} onClick={onClick} color={color} size={size}>
      {children}
    </S.Button>
  );
};

export default ModalButton;
