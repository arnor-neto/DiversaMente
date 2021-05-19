import styled from "styled-components";
import { animated } from "react-spring";

export const ModalWrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: scroll;
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: white;
  text-align: center;
`;
