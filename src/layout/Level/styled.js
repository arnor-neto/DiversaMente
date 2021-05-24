import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
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
  flex-direction: column;
  width: 100%;
  height: 74vh;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: 50%;
  }
`;
