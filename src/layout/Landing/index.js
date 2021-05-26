import * as S from "./styled";
import Button from "../../components/Button";
import { Context } from "../../GlobalContext";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import LogoFull from "../../assets/LogoFull.png";

const Landing = () => {
  let history = useHistory();
  const context = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    context.nickname.set(data.nickname);
    history.push("/home");
  };

  return (
    <S.Wrapper>
      <S.Logo src={LogoFull} />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Column>
          <S.Input
            placeholder="Usuário"
            {...register("nickname", { required: true })}
          />
          {errors.nickname && <span>This field is required</span>}
        </S.Column>
        <Button>Entrar</Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default Landing;
