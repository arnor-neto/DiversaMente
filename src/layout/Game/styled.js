import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #c33764 0%, #1d2671 100%);
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

export const LevelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;
export const Title = styled.p`
  margin: 0;
  font-size: 1.35rem;
  color: #f2f2f2;

  @media (min-width: 900px) {
    margin-top: 2%;
    font-size: 1.5rem;
  }
`;

export const P = styled.p`
  margin: 0;
  margin-bottom: 8px;
  color: #0d0c0c;

  @media (min-width: 900px) {
    width: 80%;
  }
`;

export const CardP = styled.p`
  margin: 0;
  margin-bottom: 8px;
  color: #0d0c0c;

  overflow-y: scroll;
  overflow-x: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 8; /* number of lines to show */
  -webkit-box-orient: vertical;
  scrollbar-color: #888888 rgba(0, 0, 0, 0);

  &::-webkit-scrollbar {
    width: 4px;
    background: rgba(0, 0, 0, 0);
    border-radius: 30px;
    
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    background: #888888;
    border-radius: 30px;
  }

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
  min-height: ${props => props.difficulty === "hard" ? "80vh" : '84vh'};

  @media (min-width: 900px) {
    width: ${props => props.difficulty === 'hard' ? '96%' : '70%'};
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
