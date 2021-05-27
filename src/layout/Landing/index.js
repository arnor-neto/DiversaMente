import * as S from "./styled";
import Button from "../../components/Button";
import { Context } from "../../GlobalContext";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import LogoFull from "../../assets/LogoFull.png";
import InfoIcon from "../../assets/InfoIcon.png";

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
          {errors.nickname && (
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img style={{width: '1rem', marginRight: '8px'}} src={InfoIcon} alt={"aviso"} />
              <span style={{color: '#ffffff', fontWeight: 300, fontSize: '0.9rem'}}>Campo não preenchido.</span>
            </div>
          )}
        </S.Column>
        <Button>Entrar</Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default Landing;
