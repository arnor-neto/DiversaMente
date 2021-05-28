import styled from "styled-components";
import { animated } from "react-spring";

export const ModalWrapper = styled(animated.div)`
  position: fixed;
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
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ModalContent = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  background: white;
  text-align: center;
  padding: 5%;
  border-radius: 8px;
  background: rgba(242, 242, 242, 0.9);
  
  @media (min-width: 900px){
    width: 45%;
    padding: 1%;
  }
`;
