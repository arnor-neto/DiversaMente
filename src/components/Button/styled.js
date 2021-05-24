import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #dcdcdc;
  width: ${(props) => (props.size === "big" ? "50%" : "48%")};
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 3%;
  background-color: ${(props) =>
    props.color === "primary" ? "#DCDCDC" : "white"};
`;