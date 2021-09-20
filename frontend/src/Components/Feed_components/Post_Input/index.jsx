import styled from "styled-components";
import jennifer from "../../../Assets/images/users/jennifer.png";
import send_button from "../../../Assets/svgs/send_button.svg";

const PostsInputMain = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 85%;
  height: 120px;
  justify-content: space-between;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 32px;
`;

const BasePostInput = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const PostInputLeft = styled(BasePostInput)`
  justify-content: flex-start;
  width: 80%;
  margin-left: 5%;
`;

const ProfileAvatar = styled.img`
  height: 45%;
`;
const PostInputRight = styled(BasePostInput)`
  justify-content: flex-end;
  width: 20%;
  margin-right: 5%;
`;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
`;

const PostInputField = styled.p`
  width: 75%;
  height: 50px;
  border: none;
  margin-left: 3%;
  display: flex;
  align-items: center;

  :focus {
    outline: none;
  }
`;

const Icon = styled.img`
  margin-left: 6px;
`

const PostsInput = ({user, onClickHandler}) => {
  return (
    <PostsInputMain onClick={onClickHandler} >
      <PostInputLeft>
        <ProfileAvatar
          className="profile-photo-post"
          src={jennifer}
          alt="User profile photo"
        />
        <PostInputField>What's on your mind, {user.first_name}?</PostInputField>
      </PostInputLeft>

      <PostInputRight>
        <SendButton>
          <Icon src={send_button} alt="send button" />
        </SendButton>
      </PostInputRight>
    </PostsInputMain>
  );
};

export default PostsInput;
