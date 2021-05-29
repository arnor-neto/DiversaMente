import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: ${(props) => (props.expanded ? "space-between" : "center")};
  align-items: center;
  right: 3%;
  width: ${(props) => (props.expanded ? "94%" : "42px")};
  height: 42px;
  border-radius: ${(props) => (props.expanded ? "24px" : "50%")};
  overflow: hidden;
  background-color: ${(props) => (props.expanded ? "#ffffff" : "#C33764")};
  z-index: 10;
`;

export const Input = styled.input`
  border: none;
  padding: 0;
  padding-left: ${(props) => (props.expanded ? "1rem" : 0)};
  text-align: left;
  background-color: white;
  outline: none;
  opacity: ${(props) => (props.expanded ? 1 : 0)};
  width: ${(props) => (props.expanded ? "100%" : 0)};
  height: ${(props) => (props.expanded ? "auto" : 0)};

  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.img`
  width: ${(props) => (props.expanded ? "20px" : "22px")};
  margin-right: ${(props) => (props.expanded ? "18px" : 0)};
  cursor: pointer;
`;
