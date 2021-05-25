import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Context } from "../../GlobalContext";

const Gallery = () => {
  let history = useHistory();
  const context = useContext(Context);

  const [cards, setCards] = useState([
    {
      name: "Não-binário",
      id: "1",
      image:
        "https://i.ibb.co/y6YRHw8/nonbinary-pride-flag-1-by-pride-flags-d8zu7u6-300x180.png",
    },
    {
      name: "Homem não binarie",
      id: "2",
      image:
        "https://i.ibb.co/pRCwcgp/nonbinary-boy-pride-flag-by-pride-flags-d8zu7tl-300x180.png",
    },
    {
      name: "Demigênero",
      id: "3",
      image:
        "https://i.ibb.co/qYknc70/deminonbinary-pride-flag-by-pride-flags-d8zu7jo-300x180.png",
    },
    {
      name: "Não-binário",
      id: "4",
      image:
        "https://i.ibb.co/y6YRHw8/nonbinary-pride-flag-1-by-pride-flags-d8zu7u6-300x180.png",
    },
    {
      name: "Homem não binarie",
      id: "5",
      image:
        "https://i.ibb.co/pRCwcgp/nonbinary-boy-pride-flag-by-pride-flags-d8zu7tl-300x180.png",
    },
    {
      name: "Demigênero",
      id: "6",
      image:
        "https://i.ibb.co/qYknc70/deminonbinary-pride-flag-by-pride-flags-d8zu7jo-300x180.png",
    },
    {
      name: "Kingênero",
      id: "7",
      image:
        "https://i.ibb.co/HgDkXKz/kingender-2-by-pride-flags-dac0km3-300x180.png",
    },
    {
      name: "Homem não binarie",
      id: "8",
      image:
        "https://i.ibb.co/pRCwcgp/nonbinary-boy-pride-flag-by-pride-flags-d8zu7tl-300x180.png",
    },
    {
      name: "Demigênero",
      id: "9",
      image:
        "https://i.ibb.co/qYknc70/deminonbinary-pride-flag-by-pride-flags-d8zu7jo-300x180.png",
    },
    {
      name: "Kingênero",
      id: "10",
      image:
        "https://i.ibb.co/HgDkXKz/kingender-2-by-pride-flags-dac0km3-300x180.png",
    },
  ]);

  const selectCard = (id) => {
    context.selectedCardID.set(id);
    history.push("/details");
  };

  useEffect(() => {
    axios
      .get("https://diversamente-api.herokuapp.com/api/cards/list")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("erro");
      });
  });

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <S.Title>Glossário</S.Title>
        <div style={{ width: "60.3px" }}></div>
      </S.Header>
      <S.Content>
        {cards.map((card, index) => {
          return (
            <S.ItemWrapper
              key={index}
              onClick={() => {
                selectCard(card.id);
              }}
            >
              <S.CardContainer>
                <S.CardInner>
                  <S.CardImg src={card.image} />
                </S.CardInner>
              </S.CardContainer>
              <S.Title2>{card.name}</S.Title2>
            </S.ItemWrapper>
          );
        })}
      </S.Content>
    </S.Wrapper>
  );
};

export default Gallery;
