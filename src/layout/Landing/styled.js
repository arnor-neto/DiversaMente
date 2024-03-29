import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #c33764 0%, #1d2671 100%);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  align-items: center;
  width: 50%;
`;

export const Input = styled.input`
  border: 1px solid #ffffff;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 6px;
  border-radius: 4px;
  margin-bottom: 4px;
  text-align: center;
  background-color: white;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: #ffffff;
  &::placeholder {
    color: #ffffff;
  }

  @media (min-width: 900px) {
    margin-bottom: 2%;
  }
`;

export const Logo = styled.img`
  width: 64%;
  margin-bottom: 32px;

  @media (min-width: 900px) {
    width: 24%;
  }
`;
