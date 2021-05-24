import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;

  @media (min-width: 900px) {
    width: 50%;
  } 
`;

export const AboutFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 1.4rem;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const AboutLink = styled.div`
  display: flex;
  height: 1.1rem;
  align-items: center;
  cursor: pointer;
`;
