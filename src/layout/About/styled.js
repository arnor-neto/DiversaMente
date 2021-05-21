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
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 87vh;
  padding: 0 6% 6% 6%;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.3rem;
`;

export const P = styled.p`
  margin: 0;
  margin-bottom: 1.3rem;
  text-align: center;
`;