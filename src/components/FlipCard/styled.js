import styled from "styled-components";
import { animated } from "react-spring";

export const CardContainer = styled(animated.div)`
  background-color: transparent;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  margin-bottom: 8px;
  width: ${(props) =>
    props.difficulty === "easy"
      ? "30%"
      : props.difficulty === "medium"
      ? "22%"
      : "15%"};
  padding-bottom: ${(props) =>
    props.difficulty === "easy"
      ? "30%"
      : props.difficulty === "medium"
      ? "22%"
      : "15%"};
  cursor: pointer;
  perspective: 1000px;
  -webkit-perspective: 1000px;

  @media (min-width: 800px) {
    width: ${(props) =>
      props.difficulty === "easy"
        ? "18%"
        : props.difficulty === "medium"
        ? "13%"
        : "8%"};
    padding-bottom: ${(props) =>
      props.difficulty === "easy"
        ? "18%"
        : props.difficulty === "medium"
        ? "13%"
        : "8%"};
    margin-left: ${(props) =>
      props.difficulty === "easy"
        ? "3%"
        : props.difficulty === "medium"
        ? "1%"
        : "0"};
    margin-right: ${(props) =>
      props.difficulty === "easy"
        ? "3%"
        : props.difficulty === "medium"
        ? "1%"
        : "0"};
  }
`;

export const CardInner = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
`;

export const CardFront = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  background-color: #bbb;
  color: black;
  border-radius: 8px;
  overflow: hidden;
  z-index: ${props => props.flipped ? 0 : 10};
`;

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

export const CardBack = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  background-color: rgba(242, 242, 242, 0.4);
  color: white;
  transform: rotateY(180deg);
  border-radius: 8px;
  z-index: ${props => props.flipped ? 10 : 0};
`;

export const CardLogo = styled.img`
  width: 65%;
`;
