import {
  Wrapper,
  LeftContainer,
  RightContainer,
  ProfilePictureWrapper,
  UserNameWrapper,
  TitleWrapper,
  EditProfileButton,
  InformationWrapper,
  AboutWrapper,
  ParagraphWrapper,
} from "./styled";
import {
  ContactWrapper,
  ParagraphWrapperGrey,
  ContactDetailsWrapper,
  InterestsWrapper,
  ThingsWrapper,
  ThingsLiked,
  Interaction,
  SocialInteractionWrapper,
  NumberOfPostsWrapper,
} from "./styled";

import { useHistory } from "react-router-dom";

const ProfileWrapper = ({
  user: {
    things_user_likes,
    email,
    about_me,
    last_name,
    first_name,
    avatar,
    amount_of_posts,
    amount_of_likes,
    amount_of_friends,
    amount_of_followers,
    amount_following,
    location,
  },
}) => {
  let date = new Date();

  let components = [
    date.getYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
  ];

  let key = components.join("");

  let history = useHistory();

  function onClickHandler() {
    history.push("/editprofile");
  }
  return (
    <Wrapper>
      <LeftContainer>
        <ProfilePictureWrapper src={avatar} />
        <UserNameWrapper>{`${first_name} ${last_name}`}</UserNameWrapper>
        <TitleWrapper>{location}</TitleWrapper>
        <EditProfileButton onClick={onClickHandler}>
          Edit Profile
        </EditProfileButton>
      </LeftContainer>
      
      <RightContainer>
        <InformationWrapper>
          <AboutWrapper>
            <TitleWrapper>About</TitleWrapper>
            <ParagraphWrapper>{about_me}</ParagraphWrapper>
            <ContactDetailsWrapper>
              <ContactWrapper>
                <TitleWrapper>Email</TitleWrapper>
                <ParagraphWrapper>{email}</ParagraphWrapper>
              </ContactWrapper>
              <ContactWrapper>
                <TitleWrapper>Phone Number</TitleWrapper>
                <ParagraphWrapper>123-456-789</ParagraphWrapper>
              </ContactWrapper>
            </ContactDetailsWrapper>
          </AboutWrapper>
          <InterestsWrapper>
            <TitleWrapper>Things I like</TitleWrapper>
            <ThingsWrapper>
              {things_user_likes.length > 0 ? (
                things_user_likes.map((item) => (
                  <ThingsLiked key={key}>{item}</ThingsLiked>
                ))
              ) : (
                <ThingsLiked>Motion</ThingsLiked>
              )}
            </ThingsWrapper>
          </InterestsWrapper>
        </InformationWrapper>

        <Interaction>
          <NumberOfPostsWrapper>
            <UserNameWrapper>{amount_of_posts}</UserNameWrapper>
            <ParagraphWrapper>Posts</ParagraphWrapper>
          </NumberOfPostsWrapper>
          <SocialInteractionWrapper>
            <UserNameWrapper>{amount_of_likes}</UserNameWrapper>
            <ParagraphWrapperGrey>Likes</ParagraphWrapperGrey>
          </SocialInteractionWrapper>
          <SocialInteractionWrapper>
            <UserNameWrapper>{amount_of_friends}</UserNameWrapper>
            <ParagraphWrapperGrey>Friends</ParagraphWrapperGrey>
          </SocialInteractionWrapper>
          <SocialInteractionWrapper>
            <UserNameWrapper>{amount_of_followers}</UserNameWrapper>
            <ParagraphWrapperGrey>Followers</ParagraphWrapperGrey>
          </SocialInteractionWrapper>
          <SocialInteractionWrapper>
            <UserNameWrapper>{amount_following}</UserNameWrapper>
            <ParagraphWrapperGrey>Following</ParagraphWrapperGrey>
          </SocialInteractionWrapper>
        </Interaction>
      </RightContainer>
    </Wrapper>
  );
};
export default ProfileWrapper;
