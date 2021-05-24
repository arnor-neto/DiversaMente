import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25vh;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 3%;
  margin-bottom: 2%;

  @media (min-width: 900px) {
    width: 45%;
    padding: 1%;
  }
`;

export const ArticleImgContainer = styled.div`
  display: flex;
  width: 38%;
  height: 0;
  padding-bottom: 38%;
  overflow: hidden;
  perspective: 1000px;
  border-radius: 9px;

  @media (min-width: 900px){
    width: 32%;
  padding-bottom: 32%;
  }
`;

export const ArticleImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  margin-left: 3%;
  justify-content: space-evenly;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  font-size: 0.9rem;
`;

export const P = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
  font-size: 0.9rem;
  margin-top: 8px;
`;

export const Link = styled.a`
  color: #333333;
  margin: 0;
  font-size: 0.95rem;
  align-self: flex-end;
  margin-right: 14px;
  margin-top: 8px;
`;
