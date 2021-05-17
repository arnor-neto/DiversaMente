import * as S from "./styled";
import { Context } from "../../GlobalContext";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  let history = useHistory();
  const context = useContext(Context);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    context.nickname.set(data.nickname);
    history.push("/home");
  };

  return (
    <S.Wrapper>
      <h1>Bem vindo!</h1>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nome" {...register("nickname")} />
        <button>Entrar</button>
      </S.Form>
    </S.Wrapper>
  );
};

export default Landing;
