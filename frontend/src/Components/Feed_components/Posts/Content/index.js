import { useState } from "react";
import PostPopup from "../Popup/PostDetails";
import {
  ContentWrapper,
  ImageContainer,
  TextContainer,
  ImageGridDiv,
  SingleImageDiv,
} from "./styled.js";

const Content = ({ post }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const togglePopup = (image) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
  };

  return (
    <ContentWrapper>
      {showDetails ? (
        <PostPopup
          togglePopup={togglePopup}
          image={selectedImage}
          post={post}
        />
      ) : null}
      <TextContainer>{post.content}</TextContainer>
      <ImageContainer>
        {post.images.length > 1
          ? post.images.map((image) => {
              return (
                <ImageGridDiv
                  src={image.image}
                  key={image.image}
                  onClick={() => togglePopup(image.image)}
                />
              );
            })
          : null}
      </ImageContainer>
      {post.images.length === 1
        ? post.images.map((image) => {
            return (
              <SingleImageDiv
                src={image.image}
                key={image.image}
                onClick={() => togglePopup(image.image)}
              />
            );
          })
        : null}
    </ContentWrapper>
  );
};
export default Content;
