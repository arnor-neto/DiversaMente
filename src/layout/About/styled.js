import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #C33764 0%, #1D2671 100%);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15vh;

  @media (min-width: 900px){
    justify-content: space-between;
    width: 85%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 87vh;
  padding: 0 6% 6% 6%;

  @media (min-width: 900px){
    width: 60%;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: #F2F2F2;
`;

export const P = styled.p`
  margin: 0;
  margin-bottom: 1.3rem;
  text-align: center;
  color: #F2F2F2;

  @media (min-width: 900px){
    font-size: 1.1rem;
  }
`;