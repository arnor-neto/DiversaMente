import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #c33764 0%, #1d2671 100%);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 12vh;

  @media (min-width: 900px) {
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
  font-size: 1.3rem;
  color: #f2f2f2;

  @media (min-width: 900px) {
    margin-top: 2%;
  }
`;

export const P = styled.p`
  margin: 0;
  margin-bottom: 8px;
  color: #0d0c0c;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8; /* number of lines to show */
  -webkit-box-orient: vertical;

  @media (min-width: 900px) {
    width: 80%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 86vh;

  @media (min-width: 900px) {
    width: 70%;
  }
`;

export const ModalTitle = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: #0d0c0c;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6vh;
`;

export const Flag = styled.img`
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 16px;
`;
