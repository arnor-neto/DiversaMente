import * as S from "./styled";
import FlipCard from "../../components/FlipCard";
import { useEffect, useState } from "react";
import ReturnButton from "../../components/ReturnButton";
import GameActions from "../../components/GameActions";
import Modal from "../../components/Modal";

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
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardFlippers, setCardFlippers] = useState([]);
  const [cardFaders, setCardFaders] = useState([]);
  const [lock, setLock] = useState(false);
  const [helpModal, setHelpModal] = useState(false);
  const toggleHelp = () => {
    setHelpModal(!helpModal);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    var mountedDeck = cards;
    cards.forEach((card) => {
      mountedDeck.push(card);
    });

    shuffleArray(mountedDeck);

    setDeck(mountedDeck);
  }, [cards]);

  const handleSelection = (value, flipper, fader) => {
    setSelectedCards([...selectedCards, value]);
    setCardFlippers([...cardFlippers, flipper]);
    setCardFaders([...cardFaders, fader]);
  };

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
  }, [selectedCards, cardFlippers, cardFaders]);

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
          <S.Header>
            <ReturnButton action={toggleHelp}></ReturnButton>
            <S.Title style={{ paddingRight: "28%" }}>Como jogar</S.Title>
          </S.Header>
          <div style={{ padding: "5%" }}>
            <p>
              Com um toque suave na tela selecione a carta que você quer
              desvirar.
            </p>
            <p>
              Em seguida tente encontrar nas outras cartas desviradas a mesma
              imagem da carta que já está aberta.
            </p>
            <p>
              Ao encontrar o par idêntico você receberá uma informação sobre o
              gênero no qual a bandeira da sua carta pertence.
            </p>
            <p>
              O jogo termina quando você consegue encontrar todos os pares e
              receber todas as informações referentes ao nível jogado.
            </p>
            <p>
              Não esqueça de avançar para o próximo nível e receber mais
              conhecimento!
            </p>
            <button onClick={toggleHelp}>Entendi</button>
          </div>
        </Modal>
      )}
    </S.Wrapper>
  );
};

export default Game;
