import * as S from "./styled";

/**
 * Default app modal. Contains the modal overlay style and logic.
 * Component used on Game page.
 */

const Modal = ({ children, controller}) => {
  return (
    <S.ModalWrapper>
      <S.ModalContent>{children}</S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
