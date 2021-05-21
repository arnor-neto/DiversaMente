import * as S from "./styled";
import FlipCard from "../../components/FlipCard";
import { useEffect, useState } from "react";
import ReturnButton from "../../components/ReturnButton";
import GameActions from "../../components/GameActions";
import Modal from "../../components/Modal";
import Button from "../../components/Button";


const Game = () => {
  const [cards, setCards] = useState([
    {
      text: "1",
    },
    {
      text: "2",
    },
    {
      text: "3",
    },
    {
      text: "4",
    },
    {
      text: "5",
    },
    {
      text: "6",
    },
  ]);
  const [deck, setDeck] = useState([]);
  const [deckSize, setDeckSize] = useState(12);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardFlippers, setCardFlippers] = useState([]);
  const [cardFaders, setCardFaders] = useState([]);
  const [lock, setLock] = useState(false);

  //help modal controllers
  const [helpModal, setHelpModal] = useState(false);
  const toggleHelp = () => {
    setHelpModal(!helpModal);
  };

  //card modal controllers
  const [displayCardID, setDisplayCardID] = useState();
  const [cardModal, setCardModal] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  //mounts deck when card set changes
  useEffect(() => {
    var mountedDeck = cards;
    cards.forEach((card) => {
      mountedDeck.push(card);
    });

    shuffleArray(mountedDeck);

    setDeck(mountedDeck);
  }, [cards]);

  //controls game flow
  useEffect(() => {
    if (selectedCards.length === 2) {
      setLock(true);

      if (selectedCards[0] === selectedCards[1]) {
        cardFaders.forEach((setFaded) => {
          setTimeout(() => {
            setFaded(true);
          }, 500);
        });
        setSelectedCards([]);
        setCardFlippers([]);
        setCardFaders([]);
        setDeckSize(deckSize - 2);
        setDisplayCardID(selectedCards[1]);
        setCardModal(true);
        setLock(false);
      } else {
        cardFlippers.forEach((setFlip) => {
          setTimeout(() => {
            setFlip(true);
            setLock(false);
          }, 500);
        });
        setSelectedCards([]);
        setCardFlippers([]);
        setCardFaders([]);
      }
    }
  }, [selectedCards, cardFlippers, cardFaders, deckSize]);

  //triggers game end
  useEffect(() => {
    if (deckSize === 0 && cardModal === false) {
      console.log("O jogo foi concluído");
    }
  }, [deckSize, cardModal]);

  //card click handler
  const handleSelection = (value, flipper, fader) => {
    setSelectedCards([...selectedCards, value]);
    setCardFlippers([...cardFlippers, flipper]);
    setCardFaders([...cardFaders, fader]);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <S.LevelInfo>
          <S.Title>DiversaMente</S.Title>
          <p style={{ margin: 0 }}>Fácil</p>
        </S.LevelInfo>
        <GameActions handleHelp={toggleHelp} />
      </S.Header>
      <S.Content>
        {deck.map((item, index) => {
          return (
            <FlipCard
              key={index}
              text={item.text}
              locked={lock}
              handleSelection={handleSelection}
            />
          );
        })}
      </S.Content>
      {helpModal && (
        <Modal controller={helpModal}>
          <S.Title style={{ height: "6vh" }}>Como jogar</S.Title>
          <S.P>
            Com um toque suave na tela selecione a carta que você quer desvirar.
          </S.P>
          <S.P>
            Em seguida tente encontrar nas outras cartas desviradas a mesma
            imagem da carta que já está aberta.
          </S.P>
          <S.P>
            Ao encontrar o par idêntico você receberá uma informação sobre o
            gênero no qual a bandeira da sua carta pertence.
          </S.P>
          <S.P>
            O jogo termina quando você consegue encontrar todos os pares e
            receber todas as informações referentes ao nível jogado.
          </S.P>
          <S.P>
            Não esqueça de avançar para o próximo nível e receber mais
            conhecimento!
          </S.P>
          <Button onClick={toggleHelp}>Entendi</Button>
        </Modal>
      )}
      {cardModal && (
        <Modal controller={cardModal}>
          <S.Title style={{ height: "6vh" }}>{displayCardID}</S.Title>
          <S.P>Você selecionou o card: {displayCardID}, parabéns!</S.P>
          <Button onClick={() => setCardModal(false)}>Entendi</Button>
        </Modal>
      )}
    </S.Wrapper>
  );
};

export default Game;
