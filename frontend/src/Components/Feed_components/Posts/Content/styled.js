import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextContainer = styled.p`
  width: 90%;
  margin: 10px 0px;
  word-wrap: break-word;
`;
export const ImageContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 5%;
  height: auto;
`;
export const PostContainer = styled.div`
  //   border-left: 1px ${(props) => props.theme.black10} solid;
  width: 90%;
  margin: 10px 30px;
`;
export const ImageGridDiv = styled.img`
  width: 90%;
  border-radius: 4px;
`;

export const SingleImageDiv = styled.img`
width: 85%;
height auto;
border-radius: 4px;
`;
