import { SmallSignUpButton } from "../Base_Button/styled";
import BackgroundImage from "../../../Assets/pngs/background_image.png";
import styled from "styled-components";

export const LeftCol = styled.div`
  height: 100%;
  width: 40%;
  background-image: url(${BackgroundImage}),
    ${(props) => props.theme.linearGradientGradButton};
  background-repeat: no-repeat;
  background-size: cover;
  color: ${(props) => props.theme.backgroundWhite};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TopElements = styled.div`
  height: 60%;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;

export const AppStoreButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 268px;
`;
export const BottomElements = styled.div`
  height: 40%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
`;
export const Copyright = styled.div`
  margin-bottom: 10%;
`;
export const button = styled.button`
  width: 40px;
  background: none;
`;

export const AppstoreButton = styled(SmallSignUpButton)`
  width: 126px;
  height: 40px;
  color: ${(props) => props.theme.white20};
`;
export const Twitterlogo = styled.img`
  width: 44px;
`;
export const Facebooklogo = styled.img`
  width: 40px;
`;
export const Instagramlogo = styled.img`
  width: 40px;
`;

export const TitleStyled = styled.h1`
  font-size: ${(props) => props.theme.textSizeM};
  font-weight: ${(props) => props.theme.textWeightMedium};
  margin-bottom: 5%;
`;
export const ParagraphStyled = styled.p`
  font-weight: ${(props) => props.theme.textWeightMedium};
  text-align: center;
  opacity: 0.6;
  margin-bottom: 10%;
`;
export const ImageWrapper = styled.div`
  margin-bottom: 2%;
`;
export const CopyrightStyled = styled.p`
  font-size: ${(props) => props.theme.textSizeXS};
  font-weight: ${(props) => props.theme.textWeightRegular};
  text-align: center;
`;
export const SocialMedia = styled.div`
  width: 152px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  opacity: 0.6;
  margin-bottom: 20%;
`;
