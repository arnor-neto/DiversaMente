import * as S from "./styled";
import { useSpring } from "react-spring";
import { useState } from "react";
import LogoMin from "../../assets/LogoMin.png";

/**
 * Memory game card. Renders card with given image.
 * Can be flipped and triggers events.
 * Component used on the Game page. 
 */

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
      cursor: 'pointer'
    },
    to: {
      opacity: `${faded ? 0 : 1}`,
      cursor: `${faded? 'default' : 'pointer'}`,
    },
    config: { duration: 650 },
  });

  return (
    <S.CardContainer style={{ ...fadeSpring }} difficulty={difficulty}>
      <S.CardInner style={{ ...flipSpring }}>
        <S.CardFront flipped={flipped}>
          <S.CardImg src={image}/>
        </S.CardFront>
        <S.CardBack onClick={flip} flipped={flipped}>
          <S.CardLogo src={LogoMin}/>
        </S.CardBack>
      </S.CardInner>
    </S.CardContainer>
  );
};

export default FlipCard;
