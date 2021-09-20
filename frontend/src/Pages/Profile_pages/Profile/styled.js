import styled from "styled-components";
import Main from "../../../Components/Verification/Main Wrapper/index";

export const FeedMain = styled(Main)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.postsBackground};
  height: auto;
`;

export const BackgroundImageProfile = styled.img`
  width: 100%;
  height: 350px;
  display: flex;
  position: absolute;
`;
