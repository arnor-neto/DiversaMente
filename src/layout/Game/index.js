import * as S from "./styled";
import FlipCard from "../../components/FlipCard";
import { useContext, useEffect, useState } from "react";
import ReturnButton from "../../components/ReturnButton";
import GameActions from "../../components/GameActions";
import Modal from "../../components/Modal";
import ModalButton from "../../components/ModalButton";
import { useHistory } from "react-router";
import { Context } from "../../GlobalContext";
import CloseIcon from "../../assets/CloseIcon.png";
import axios from "axios";

const Game = () => {
  let history = useHistory();
  const context = useContext(Context);
  const difficulty = context.difficulty.get;

  const [deck, setDeck] = useState([]);
  const [deckSize, setDeckSize] = useState();
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
  const [displayCard, setDisplayCard] = useState();
  const [cardModal, setCardModal] = useState(false);

  //return confirm controllers
  const [returnModal, setReturnModal] = useState(false);

  //restart confirm controllers
  const [restartModal, setRestartModal] = useState(false);

  //game end controllers
  const [endModal, setEndModal] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  //mounts deck when card set changes
  const mountDeck = (cards) => {
    var mountedDeck = [];
    var cardPool = cards;
    shuffleArray(cardPool);

    if (difficulty === "easy") {
      setDeckSize(6 * 2);
      for (let i = 0; i < 6; i++) {
        mountedDeck.push(cardPool[i]);
      }
    } else if (difficulty === "medium") {
      setDeckSize(12 * 2);
      for (let i = 0; i < 12; i++) {
        mountedDeck.push(cardPool[i]);
      }
    } else if (difficulty === "hard") {
      setDeckSize(24 * 2);
      for (let i = 0; i < 24; i++) {
        mountedDeck.push(cardPool[i]);
      }
    }

    mountedDeck.forEach((card) => {
      mountedDeck.push(card);
    });

    shuffleArray(mountedDeck);

    setDeck(mountedDeck);
  };

  //obtains all cards from server
  useEffect(() => {
    axios
      .get("https://diversamente-api.herokuapp.com/api/cards/list")
      .then((response) => {
        mountDeck(response.data.data);
      })
      .catch((err) => {
        console.log("erro");
      });
  }, []);

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
        setDisplayCard(deck.find((card) => card.name === selectedCards[1]));
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
  }, [deck, selectedCards, cardFlippers, cardFaders, deckSize]);

  //triggers game end
  useEffect(() => {
    if (deckSize === 0 && cardModal === false) {
      setEndModal(true);
      if (difficulty === "easy") {
        context.mediumUnlocked.set("true");
      }
      if (difficulty === "medium") {
        context.hardUnlocked.set("true");
      }
    }
  }, [deckSize, cardModal]);

  //card click handler
  const handleSelection = (value, flipper, fader) => {
    setSelectedCards([...selectedCards, value]);
    setCardFlippers([...cardFlippers, flipper]);
    setCardFaders([...cardFaders, fader]);
  };

  //return click handler
  const handleReturn = () => {
    setReturnModal(true);
  };

  //restart click handlers
  const handleRestart = () => {
    setRestartModal(true);
  };
  const restart = () => {
    window.location.reload();
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <ReturnButton action={handleReturn} />
          <S.LevelInfo>
            <S.Title>DiversaMente</S.Title>
            <p style={{ margin: 0, color: "#f2f2f2" }}>
              {difficulty === "easy"
                ? "Fácil"
                : difficulty === "medium"
                ? "Médio"
                : "Difícil"}
            </p>
          </S.LevelInfo>
          <GameActions handleRestart={handleRestart} handleHelp={toggleHelp} />
        </S.Header>
        <S.Content difficulty={difficulty}>
          {deck.map((item, index) => {
            return (
              <FlipCard
                key={index}
                name={item.name}
                image={item.image}
                locked={lock}
                handleSelection={handleSelection}
                difficulty={context.difficulty.get}
              />
            );
          })}
        </S.Content>
      </S.Wrapper>
      {helpModal && (
        <Modal controller={helpModal}>
          <S.ModalHeader>
            <div style={{ width: "22px" }}></div>
            <S.ModalTitle>Como jogar</S.ModalTitle>
            <img
              onClick={toggleHelp}
              src={CloseIcon}
              alt={"fechar"}
              style={{ marginRight: "8px", cursor: "pointer" }}
            />
          </S.ModalHeader>
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
        </Modal>
      )}
      {cardModal && (
        <Modal controller={cardModal}>
          <S.ModalHeader>
            <div style={{ width: "22px" }}></div>
            <S.ModalTitle>{displayCard.name}</S.ModalTitle>
            <img
              onClick={() => setCardModal(false)}
              src={CloseIcon}
              alt={"fechar"}
              style={{ marginRight: "8px", cursor: "pointer" }}
            />
          </S.ModalHeader>
          <S.Flag src={displayCard.image} />
          <S.P>{displayCard.description}</S.P>
        </Modal>
      )}
      {returnModal && (
        <Modal controller={returnModal}>
          <S.ModalTitle style={{ marginBottom: "6px" }}>Atenção</S.ModalTitle>
          <S.P style={{ marginBottom: "18px" }}>
            Você tem certeza que deseja sair? Sua partida não estará salva e
            você perderá todos os movimentos já realizados.
          </S.P>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <ModalButton
              size={"small"}
              color={"secondary"}
              onClick={() => setReturnModal(false)}
            >
              Cancelar
            </ModalButton>
            <ModalButton size={"small"} onClick={() => history.goBack()}>
              Sair
            </ModalButton>
          </div>
        </Modal>
      )}
      {restartModal && (
        <Modal controller={restartModal}>
          <S.ModalTitle style={{ marginBottom: "6px" }}>Atenção</S.ModalTitle>
          <S.P style={{ marginBottom: "18px" }}>
            Você tem certeza que gostaria de reiniciar esta partida? Todos os
            seus movimentos serão perdidos.
          </S.P>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <ModalButton
              size={"small"}
              color={"secondary"}
              onClick={() => setRestartModal(false)}
            >
              Cancelar
            </ModalButton>
            <ModalButton size={"small"} onClick={restart}>
              Reiniciar
            </ModalButton>
          </div>
        </Modal>
      )}
      {endModal && (
        <Modal controller={endModal}>
          <S.ModalTitle style={{ marginBottom: "6px" }}>Parabéns!</S.ModalTitle>
          {difficulty === "easy" ? (
            <S.P style={{ marginBottom: "18px" }}>
              Chegou a hora de avançar para o nível médio e adquirir mais
              conhecimentos!
            </S.P>
          ) : difficulty === "medium" ? (
            <S.P style={{ marginBottom: "18px" }}>
              Chegou a hora de avançar para o nível difícil e adquirir mais
              conhecimentos!
            </S.P>
          ) : (
            <S.P style={{ marginBottom: "18px" }}>
              Você concluiu o Jogo da Memória DiversaMente e agora sabe um
              pouquinho mais sobre a diversidade de gênero. Jogue novamente para
              descobrir novos gêneros ou visualize todos acessando o glossário.
            </S.P>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            {difficulty === "hard" ? (
              <ModalButton onClick={() => history.push("/home")}>
                Sair
              </ModalButton>
            ) : (
              <ModalButton onClick={() => history.push("/level")}>
                Próximo nível
              </ModalButton>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Game;
