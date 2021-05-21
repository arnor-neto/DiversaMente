import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid #dcdcdc;
  width: 50%;
  font-size: 1.3rem;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 4%;
  text-align: center;
  background-color: white;
  outline: none;
`;
