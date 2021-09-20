import styled from "styled-components";
import Heart from "../../../../Assets/svgs/heart.svg";
import Share from "../../../../Assets/svgs/share.svg";

const FooterWrapper = styled.span`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: ${(props) => props.theme.textSizeS};
  padding-top: 10px;
`;
const NumberOfLikes = styled.p`
  font-size: ${(props) => props.theme.textSizeS};
  opacity: 0.5;
  padding-right: 30px;
`;
const PostInteraction = styled.div`
  padding-left: 30px;
  width: 40%;
  display: flex;
  justify-content: space-between;
`;
const ShareStyled = styled.img``;
const HeartStyled = styled.img`
  fill: red;
`;
const ParagraphStyled = styled.p`
  font-size: ${(props) => props.theme.textSizeS};
`;

const Footer = ({post: { likes }}) => {
  return (
    <FooterWrapper>
      <PostInteraction>
        <HeartStyled src={Heart} />
        <ParagraphStyled> Like</ParagraphStyled>
        <ShareStyled src={Share} />
        <ParagraphStyled> Share</ParagraphStyled>
      </PostInteraction>
      <NumberOfLikes>{likes ? `${likes} likes` : `0 likes`}</NumberOfLikes>
    </FooterWrapper>
  );
};
export default Footer;