import styled from "styled-components";
import Main from "../../../Components/Verification/Main Wrapper/index";

export const FeedMain = styled(Main)`
  display: flex;
  height: auto;
  flex-direction: column;
  background-color: ${(props) => props.theme.postsBackground};
`;
export const PostsBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%
  overflow: auto;
`;

export const LoadingMessage = styled.p`
  width: 100%;
  text-align: center;
`;
