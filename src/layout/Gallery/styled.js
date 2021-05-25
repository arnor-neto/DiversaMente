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

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 87vh;

  @media (min-width: 900px){
    width: 70%;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.3rem;
  justify-self: center;
`;

export const Title2 = styled.p`
  margin: 0;
  font-size: 1.15rem;
  margin-top: 4px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  cursor: pointer;
  margin-bottom: 20px;

  @media (min-width: 900px){
    width: 22%;
  }
`;

export const CardContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  perspective: 1000px;
`;

export const CardInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  border-radius: 8px;
`;

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
