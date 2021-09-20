import TwitterLogo from "../../../Assets/svgs/twitter_icon.svg";
import FacebookLogo from "../../../Assets/svgs/facebook_icon.svg";
import InstagramLogo from "../../../Assets/svgs/instagram_icon.svg";
import { ReactComponent as Playstore } from "../../../Assets/svgs/google.svg";
import { ReactComponent as Applestore } from "../../../Assets/svgs/apple.svg";
import MotionLogo from "../../../Assets/pngs/logo_white.png";
import {
  Twitterlogo,
  Facebooklogo,
  Instagramlogo,
  LeftCol,
  TopElements,
  ImageWrapper,
  BottomElements,
  AppstoreButton,
} from "./styled";
import {
  TitleStyled,
  AppStoreButtons,
  ParagraphStyled,
  SocialMedia,
  Copyright,
  CopyrightStyled,
} from "./styled";

const onClickHandler = (e) => {
  // switch(e.target.id){
  //     case "Applestore":
  //         props.p
  //     case "Playstore":
  // }
};

const LeftContainer = () => {
  return (
    <LeftCol>
      <TopElements>
        <ImageWrapper>
          <img src={MotionLogo} alt="Motion Logo" />
        </ImageWrapper>
        <TitleStyled>Motion</TitleStyled>
        <ParagraphStyled>
          Connect with your friends and the world around you with motion
        </ParagraphStyled>
        <AppStoreButtons>
          <AppstoreButton>
            {" "}
            <Applestore id="Applestore" onClick={onClickHandler} />{" "}
          </AppstoreButton>
          <AppstoreButton>
            <Playstore id="Playstore" onClick={onClickHandler} />
          </AppstoreButton>
        </AppStoreButtons>
      </TopElements>

      <BottomElements>
        <SocialMedia>
          <Twitterlogo src={TwitterLogo} />
          <Facebooklogo src={FacebookLogo} />
          <Instagramlogo src={InstagramLogo} />
        </SocialMedia>

        <Copyright>
          <CopyrightStyled>© Motion 2020. All rights reserved</CopyrightStyled>
        </Copyright>
      </BottomElements>
    </LeftCol>
  );
};

export default LeftContainer;
