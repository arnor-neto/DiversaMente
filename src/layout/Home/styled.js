import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;

  @media (min-width: 900px) {
    width: 50%;
  } 
`;

export const AboutFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 32px;
  font-size: 1.4rem;
  font-weight: 400;
  color: #F2F2F2;
`;

export const AboutLink = styled.div`
  display: flex;
  height: 1.1rem;
  align-items: center;
  cursor: pointer;
`;
