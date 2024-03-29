import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
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
  width: 100%;
  height: 74vh;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: 50%;
  }
`;
