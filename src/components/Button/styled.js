import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #dcdcdc;
  width: 50%;
  font-size: 1.3rem;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 4%;
  background-color: ${(props) =>
    props.color === "primary" ? "#DCDCDC" : "white"};
`;
