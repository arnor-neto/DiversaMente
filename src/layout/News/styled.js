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
  height: 15vh;

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
  padding-bottom: 18px;

  @media (min-width: 900px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: #f2f2f2;
`;
