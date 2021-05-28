import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: ${(props) => (props.expanded ? "space-between" : "center")};
  align-items: center;
  right: 6%;
  width: ${(props) => (props.expanded ? "82%" : "36px")};
  height: 36px;
  border-radius: ${(props) => (props.expanded ? "24px" : "50%")};
  overflow: hidden;
  background-color: ${(props) => (props.expanded ? "#ffffff" : "rgba(0, 0, 0, 0)")};
  z-index: 10;

  @media (min-width: 900px) {
    width: ${(props) => (props.expanded ? "88%" : "35px")};
    height: 35px;
  }
`;

export const Input = styled.input`
  border: none;
  font-size: 1.1rem;
  padding-left: 1rem;
  text-align: left;
  background-color: white;
  outline: none;
  display: ${(props) => (props.expanded ? "inline" : "none")};
  width: 100% ;

  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.img`
  width: ${(props) => (props.expanded ? "18px" : "24px")};;
  margin-right: ${(props) => (props.expanded ? "18px" : 0)};
  cursor: pointer;
`;
