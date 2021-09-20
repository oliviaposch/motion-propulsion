import styled from "styled-components";
import Header from "../../Header";
import ClosePostIcon from "../../../../../Assets/svgs/close_cross_icon.svg";
import Heart from "../../../../../Assets/svgs/heart.svg";
import Share from "../../../../../Assets/svgs/share.svg";

const Window = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

const NewPostContainer = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 70%;
  max-height: 90%;
  background: ${(props) => props.theme.backgroundWhite};
  border-radius: 4px;
  position: relative;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
`;

const ImageWrapper = styled.img`
  display: flex;
  max-width: 70%;
  object-fit: cover;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: -15px;
  right: -15px;
`;

const Content = styled.p`
  padding: 0 30px;
`;

const FooterWrapper = styled.span`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: ${(props) => props.theme.textSizeS};
  padding-top: 10px;
  border-top: 1px solid ${(props) => props.theme.black20};
`;

const ShareStyled = styled.img``;
const HeartStyled = styled.img`
  fill: red;
`;
const ParagraphStyled = styled.p`
  font-size: ${(props) => props.theme.textSizeS};
`;

const PostInteraction = styled.div`
  padding-left: 30px;
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const PostPopup = ({ post, image, togglePopup }) => {
  return (
    <Window>
      <NewPostContainer>
        <CloseIcon src={ClosePostIcon} onClick={togglePopup} />
        <ImageWrapper img src={image} />
        <ContentContainer>
          <div>
            <Header user={post.user}></Header>
            <Content>{post.content}</Content>
          </div>
          <FooterWrapper>
            <PostInteraction>
              <HeartStyled src={Heart} />
              <ParagraphStyled> Like</ParagraphStyled>
              <ShareStyled src={Share} />
              <ParagraphStyled> Share</ParagraphStyled>
            </PostInteraction>
          </FooterWrapper>
        </ContentContainer>
      </NewPostContainer>
    </Window>
  );
};

export default PostPopup;
