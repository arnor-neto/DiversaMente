import * as S from "./styled";
import { useSpring } from "react-spring";
import { useState } from "react";

const FlipCard = ({ name, image, locked, handleSelection, difficulty }) => {
  const [flipped, setFlipped] = useState(true);
  const [faded, setFaded] = useState(false);

  const flip = () => {
    if (!locked) {
      setFlipped(!flipped);
      handleSelection(name, setFlipped, setFaded);
    }
  };

  const flipSpring = useSpring({
    from: {
      transform: `rotateY(${flipped ? "0deg" : "180deg"})`,
    },
    to: {
      transform: `rotateY(${flipped ? "180deg" : "0deg"})`,
    },
  });

  const fadeSpring = useSpring({
    from: {
      opacity: `${faded ? 1 : 0}`,
    },
    to: {
      opacity: `${faded ? 0 : 1}`,
    },
    config: { duration: 650 },
  });

  return (
    <S.CardContainer style={{ ...fadeSpring }} difficulty={difficulty}>
      <S.CardInner style={{ ...flipSpring }}>
        <S.CardFront>
          <S.CardImg src={image}/>
        </S.CardFront>
        <S.CardBack onClick={flip}>
          <h1>Back</h1>
        </S.CardBack>
      </S.CardInner>
    </S.CardContainer>
  );
};

export default FlipCard;
