import styled from "styled-components";
import { BaseButton } from "../../Verification/Base_Button/styled";

export const Wrapper = styled.div`
  width: 80%;
  height: 350px;
  min-width: 700px;
  margin-right: 10%;
  margin-left: 10%;
  display: flex;
  background-color: ${(props) => props.theme.backgroundWhite};
  box-shadow: 0px 10px 20px 0px ${(props) => props.theme.black05};
  box-shadow: 0px 0px 1px 0px ${(props) => props.theme.black20};
  position: relative;
  top: 120px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
  min-width: 158px;
  border-right: 1px solid ${(props) => props.theme.black10};
`;
export const RightContainer = styled.div`
  width: 70%;
`;
export const Interaction = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${(props) => props.theme.black10};
  height: 33%;
`;



export const NumberOfPostsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #ad73fd;
  height: 103.5%;
`;

export const SocialInteractionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: center;
`;

export const EditProfileButton = styled(BaseButton)`
  height: 40px;
  width: 158px;
  font-weight: ${(props) => props.theme.textWeightRegular};
  font-size: ${(props) => props.theme.textSizeXXS};
  margin-bottom: 10px;
  margin-top: 10px;

  :hover {
    cursor: pointer;
  }
`;

export const ThingsLiked = styled.button`
  font-size: ${(props) => props.theme.textSizeXXS};
  background: ${(props) => props.theme.black05};
  border: none;
  border-radius: 18px;
  padding: 8px 16px;
`;

export const UserNameWrapper = styled.p`
  font-weight: ${(props) => props.theme.textWeightRegular};
  font-size: ${(props) => props.theme.textSizeUserName};
`;

export const ParagraphWrapper = styled.p`
  //16px
  font-size: ${(props) => props.theme.textSizeDefault};
`;

export const TitleWrapper = styled.p`
  //14px
  font-size: ${(props) => props.theme.textSizeS};
  margin: 5px 0px 5px 0px;
`;

export const ProfilePictureWrapper = styled.img`
  margin-top: 20px;
  height: 80px;
  width: 80px;
`;

export const InformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-content: center;
  height: 66%;
`;
export const InterestsWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px 8% 10% 8%;
`;
export const AboutWrapper = styled.div`
  width: 50%;
  margin: 10px 8% 10px 8%;
`;
export const ContactDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-content: center;
  margin-top: 10%;
`;

export const ThingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: flex-start;
`;
export const ParagraphWrapperGrey = styled(ParagraphWrapper)`
  opacity: 0.5;
`;
