import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(180deg, #c33764 0%, #1d2671 100%);
  background-attachment: fixed;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 13vh;

  @media (min-width: 900px) {
    justify-content: space-between;
    width: 85%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 87vh;
  padding: 0 2% 2% 2%;

  @media (min-width: 900px) {
    width: 90%;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.3rem;
  color: #F2F2F2;
`;

export const Flag = styled.img`
  border-radius: 8px;
  margin-bottom: 16px;
  align-self: center;
  
  @media (min-width: 900px) {
    width: 400px;
  }
`;

export const P = styled.p`
  color: #F2F2F2; 
  text-align: center;
  width: 90%;
  align-self: center;
  
  @media (min-width: 900px) {
    width: 70%;
  }
`;
