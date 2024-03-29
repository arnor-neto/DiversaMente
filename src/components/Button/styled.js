import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: ${(props) =>
    props.color === "primary" ? "none" : "1px solid #ffffff"};
  width: ${(props) => (props.size === "big" ? "50%" : "48%")};
  font-size: 1.1rem;
  font-weight: 400;
  color: ${(props) => (props.color === "primary" ? "#333333" : "#FFFFFF")};
  padding: 6px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.color === "primary"
      ? "rgba(255, 255, 255, 0.8);"
      : "rgba(0, 0, 0, 0);"};
`;
