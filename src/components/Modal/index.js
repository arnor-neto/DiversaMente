import * as S from "./styled";

const Modal = ({ children, controller}) => {
  return (
    <S.ModalWrapper>
      <S.ModalContent>{children}</S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
