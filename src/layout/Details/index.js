import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
import { Context } from "../../GlobalContext";
import { useContext } from "react";

const Details = () => {
  const context = useContext(Context);

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <S.Title>genero id: {context.selectedCardID.get}</S.Title>
        <div style={{ width: "60.3px" }} />
      </S.Header>
      <S.Content>
        <p>Conteúdo</p>
      </S.Content>
    </S.Wrapper>
  );
};

export default Details;
