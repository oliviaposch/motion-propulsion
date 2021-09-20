import styled from "styled-components";
import DefaultAvatar from "../../../Assets/pngs/generic_user.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundWhite};
  box-shadow: ${(props) => props.theme.boxShadowFriends};
  padding: 40px;
  width: 100%;
  min-width: 200px;
  aspect-ratio: 362  / 489;
  border-radius: 4px;
`;

const Image = styled.img`
  width: 42%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  margin: 20px 0;
`;

const Name = styled.h3`
  font-size: ${(props) => props.theme.textSizeTitle};
  font-weight: ${(props) => props.theme.textWeightRegular};
`;

const Location = styled.h4`
  font-size: ${(props) => props.theme.textSizeS};
  font-weight: ${(props) => props.theme.textWeightRegular};
  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 130px;
  background: none;
  border: 1px rgba(212, 208, 208, 0.619) solid;
  border-radius: 30px;
  margin: 5px;
  font-size: ${(props) => props.theme.textSizeXXS};
`;

const FollowingButton = styled(BaseButton)`
  background: ${(props) => props.theme.purple};
  border: 1px solid transparent;
  color: ${(props) => props.theme.backgroundWhite};
  font-weight: ${(props) => props.theme.textWeightMedium};
`;

const FriendButton = styled(BaseButton)``;

const Description = styled.p`
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  text-align: center;
  line-height: 24px;
  font-size: ${(props) => props.theme.textSizeS};
`;

const Interests = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Items = styled.p`
  margin: 5px;
  background-color: ${(props) => props.theme.black05};
  font-size: ${(props) => props.theme.textSizeS};
  font-weight: ${(props) => props.theme.textWeightRegular};
  height: 32px;
  border-radius: 16px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
`;

const Person = ({ user }) => {
  return (
    <Wrapper>
      <Image src={user.avatar !== null ? user.avatar : DefaultAvatar} />
      <Name>
        {user.first_name !== "" ? user.first_name : "User"}{" "}
        {user.last_name !== "" ? user.last_name : "Name"}
      </Name>
      <Location>
        {user.location !== "" ? user.location : "Unknown location"}
      </Location>
      <ButtonContainer>
        {user.logged_in_user_is_following ? (
          <FollowingButton>FOLLOWING</FollowingButton>
        ) : (
          <BaseButton>FOLLOW</BaseButton>
        )}
        {user.logged_in_user_is_friends ? (
          <FriendButton>FRIEND</FriendButton>
        ) : (
          <BaseButton>ADD FRIEND</BaseButton>
        )}
      </ButtonContainer>
      <Description>
        {user.about_me !== "" ? user.about_me : "User has no bio"}
      </Description>
      <Interests interests={user.things_user_likes}>
        {user.things_user_likes.map((item, index) => (
          <Items key={index} >{item}</Items>
        ))}
      </Interests>
    </Wrapper>
  );
};

export default Person;
