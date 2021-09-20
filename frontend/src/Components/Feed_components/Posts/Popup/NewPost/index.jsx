import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Axios from "../../../../../API/index";
import ArrowImage from "../../../../../Assets/pngs/send_button.png";
import ImageIcon from "../../../../../Assets/svgs/image_icon.svg";
import LinkIcon from "../../../../../Assets/svgs/link_icon.svg";
import ImagePreview from "../ImagePreview";
import ClosePostIcon from "../../../../../Assets/svgs/close_cross_icon.svg";

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
  flex-direction: column;
  justify-content: space-between;
  width: 560px;
  background: ${(props) => props.theme.backgroundWhite};
  border-radius: 4px;
  padding: 4px 0;
  position: relative;
`;

const ProfilPicture = styled.img`
  border: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: black;
`;

const TextArea = styled.textarea`
  min-height: 50px;
  width: 100%;
  height: 75px;
  resize: none;
  overflow: hidden;
  border: none;
  margin-right: 4px;
  line-height: 24px;

  :focus {
    outline: none;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 40px;
`;

const ContentContainer = styled.div`
  width: 80%;
`;

const ImagesContainer = styled.div`
  min-height: 120px;
  display: flex;
  flex-wrap: wrap;
`;

const Icon = styled.img`
  color: ${(props) => props.theme.black50};
  margin-right: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 30px;
  width: 20%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 100px;
  border-top: 1px solid ${(props) => props.theme.black20};
`;

const FooterIncludeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  border: 2px solid ${(props) => props.theme.backgroundWhite};
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;

  :hover {
    border: 2px solid ${(props) => props.theme.purple};
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  top: -5%;
  right: -3%;
`;

const NewPostPopup = ({ togglePopup, avatar }) => {
  const token = useSelector((state) => state.token);
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia, ad per utamur ceteros apeirian"
  );
  const [images, setImages] = useState([]);
  const uploadFileButton = useRef();

  const onChangeText = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const onImageChange = (event) => {
    const newList = new DataTransfer();
    Array.from(images).forEach((image) => newList.items.add(image));
    Array.from(event.target.files).forEach((newImage) => {
      const image = Array.from(images).filter(
        (image) => image.name === newImage.name && image.size === newImage.size
      );
      if (image.length === 0) {
        newList.items.add(newImage);
      }
    });
    setImages(newList.files);
  };

  const onAddImage = () => {
    uploadFileButton.current.click();
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    Array.from(images).forEach((image) => {
      data.append("images", image);
    });
    data.append("content", text);

    SendNewPost(data);
    togglePopup();
  };

  const onDeleteImage = (image) => {
    const newList = Array.from(images).filter((img) => img !== image);
    setImages(newList);
  };

  const SendNewPost = async (data) => {
    const url = "social/posts/";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      await Axios.post(url, data, config);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Window>
      <NewPostContainer onSubmit={onHandleSubmit}>
        <CloseIcon src={ClosePostIcon} onClick={togglePopup} />
        <TopContainer>
          <ImageWrapper>
            <ProfilPicture src={avatar} alt="" />
          </ImageWrapper>
          <ContentContainer>
            <TextArea
              onChange={onChangeText}
              placeholder="Type something here..."
            />
            <ImagesContainer>
              {Array.from(images).map((image) => (
                <ImagePreview
                  key={uuidv4()}
                  image={image}
                  deleteHandler={() => onDeleteImage(image)}
                />
              ))}
            </ImagesContainer>
          </ContentContainer>
        </TopContainer>
        <Footer>
          <FooterIncludeDiv>
            <Icon src={ImageIcon} alt="" onClick={onAddImage} />
            <input
              type="file"
              id="addFiles"
              hidden
              onChange={onImageChange}
              ref={uploadFileButton}
              multiple
              accept="image/jpeg, image/png"
            />
            <Icon src={LinkIcon} alt="" />
          </FooterIncludeDiv>
          <div>
            <SubmitButton>
              <img src={ArrowImage} alt="" />
            </SubmitButton>
          </div>
        </Footer>
      </NewPostContainer>
    </Window>
  );
};

export default NewPostPopup;
