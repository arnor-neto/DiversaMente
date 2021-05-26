import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: ${(props) =>
    props.color === "primary" ? "none" : "1px solid #333333"};
  width: ${(props) => (props.size === "big" ? "50%" : "48%")};
  font-size: 1.1rem;
  font-weight: 400;
  color: ${(props) => (props.color === "primary" ? "#F2F2F2" : "#333333")};
  padding: 6px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.color === "primary" ? "#C33764" : "rgba(0, 0, 0, 0);"};
`;
