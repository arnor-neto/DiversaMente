import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: ${(props) => (props.expanded ? "space-between" : "center")};
  align-items: center;
  right: 8%;
  border: 1px solid #dcdcdc;
  width: ${(props) => (props.expanded ? "80%" : "40px")};
  height: 40px;
  border-radius: ${(props) => (props.expanded ? "24px" : "50%")};
  overflow: hidden;
  background-color: white;
  z-index: 10;

  @media (min-width: 900px) {
    width: ${(props) => (props.expanded ? "25%" : "35px")};
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

  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: ${(props) => (props.expanded ? "18px" : 0)};
  cursor: pointer;

  @media (min-width: 900px) {
    width: 16px;
    height: 16px;
  }
`;
