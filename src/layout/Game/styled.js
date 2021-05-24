import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 13vh;

  @media (min-width: 900px){
    justify-content: space-between;
    width: 85%;
  }
`;

export const LevelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;
export const Title = styled.p`
  margin: 0;
  margin-bottom: 6px;
  font-size: 1.3rem;

  @media (min-width: 900px){
    margin-top: 2%;
  }
`;

export const P = styled.p`
  margin: 0;
  margin-bottom: 1.3em;

  @media (min-width: 900px){
    width: 80%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 85vh;

  @media (min-width: 900px){
    width: 70%;
  }
`;