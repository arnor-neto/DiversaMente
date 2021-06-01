import * as S from "./styled";

/**
 * Custom button component for modal. Contains a different color scheme.
 * Used on the Game page.
 */

const ModalButton = ({ onClick, children, color = "primary", size = "big", style}) => {
  return (
    <S.Button style={{...style}} onClick={onClick} color={color} size={size}>
      {children}
    </S.Button>
  );
};

export default ModalButton;
