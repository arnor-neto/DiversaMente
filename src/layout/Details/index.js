import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
import { Context } from "../../GlobalContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const context = useContext(Context);
  const [card, setCard] = useState();
  let cardID = context.selectedCardID.get;

  useEffect(() => {
    axios
      .get(`https://diversamente-api.herokuapp.com/api/cards/list/${cardID}`)
      .then((response) => {
        setCard(response.data);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <S.Title>{card?.name}</S.Title>
        <div style={{ width: "60.3px" }} />
      </S.Header>
      <S.Content>
        <S.Flag src={card?.image}/>
        <S.P>{card?.description}</S.P>
      </S.Content>
    </S.Wrapper>
  );
};

export default Details;
