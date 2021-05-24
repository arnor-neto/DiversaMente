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
`;

export const ArticleImgContainer = styled.div`
  display: flex;
  width: 30%;
  height: 0;
  padding-bottom: 30%;
  overflow: hidden;
  perspective: 1000px;
  border-radius: 9px;
`;

export const ArticleImg = styled.img`
  position: absolute;
  height: 100%;
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 5%;
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
`;
