import styled from "styled-components";
import { animated } from "react-spring";

export const CardContainer = styled(animated.div)`
  background-color: transparent;
  width: ${(props) =>
    props.difficulty === "easy"
      ? "30%"
      : props.difficulty === "medium"
      ? "22%"
      : "16%"};
  padding-bottom: ${(props) =>
    props.difficulty === "easy"
      ? "30%"
      : props.difficulty === "medium"
      ? "22%"
      : "16%"};
  cursor: pointer;
  perspective: 1000px;

  @media (min-width: 900px) {
    width: ${(props) =>
      props.difficulty === "easy"
        ? "18%"
        : props.difficulty === "medium"
        ? "13%"
        : "10%"};
    padding-bottom: ${(props) =>
      props.difficulty === "easy"
        ? "18%"
        : props.difficulty === "medium"
        ? "13%"
        : "10%"};
    margin-left: ${(props) =>
      props.difficulty === "easy"
        ? "3%"
        : props.difficulty === "medium"
        ? "1%"
        : "1%"};
    margin-right: ${(props) =>
      props.difficulty === "easy"
        ? "3%"
        : props.difficulty === "medium"
        ? "1%"
        : "1%"};
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
  background-color: #bbb;
  color: black;
  border-radius: 8px;
  overflow: hidden;
`;

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CardBack = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  border-radius: 8px;
`;
