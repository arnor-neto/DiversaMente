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
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 87vh;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.3rem;
`;

export const Title2 = styled.p`
  margin: 0;
  font-size: 1.15rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

export const CardContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  cursor: pointer;
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
`;
