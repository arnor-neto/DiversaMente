import * as S from "./styled";
import { useSpring } from "react-spring";

const Modal = ({ children, controller }) => {
  const fadeSpring = useSpring({
    from: {
      opacity: `${controller ? 0 : 1}`,
    },
    to: {
      opacity: `${controller ? 1 : 0}`,
    },
  });

  return (
    <S.ModalWrapper style={{ ...fadeSpring }}>
      <S.ModalContent style={{ ...fadeSpring }}>{children}</S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
