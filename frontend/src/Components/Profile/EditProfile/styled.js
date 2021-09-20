import styled from "styled-components";
import { BaseButton } from "../../Verification/Base_Button/styled";


// Main Layout 
export const Wrapper = styled.div`
  width: 80%;
  height: 600px;
  min-width: 700px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundWhite};
  box-shadow: 0px 10px 20px 0px ${(props) => props.theme.black05};
  box-shadow: 0px 0px 1px 0px ${(props) => props.theme.black20};
  position: relative;
  top: 130px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas: 
    "pic pic info info info info info"
    "pic pic info info info info info"
    "pic pic info info info info info"
    "pic pic things things things things things"
    "pic pic things things things things things";
`;

export const LeftContainer = styled.div`
  grid-area: pic;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 158px;
  border-right: 1px solid ${(props) => props.theme.black10};
`;

export const RightContainer = styled.div`
  grid-area: info;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
  padding: 5% 5% 0% 5%;
`;

export const BottomContainer = styled.div`
  grid-area: things;
  padding: 5% 5% 5% 5%;

  display: grid;
  grid-template-columns: 9fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "tag btn"
    "inp btn";

  .add {
    align-self: end;
  }
`


// Buttons
export const EditProfileButton = styled(BaseButton)`
  grid-area: btn;
  height: 40px;
  width: 158px;
  font-weight: ${(props) => props.theme.textWeightRegular};
  font-size: ${(props) => props.theme.textSizeXXS};
  margin-bottom: 10px;
  margin-top: 10px;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.black05};
    border: rgba(255,255,255,0);
  }
  background-color: ${(props) => props.clicked ? 'rgba(212, 208, 208, 0.619)' : null};
`;

export const SaveProfilButton = styled(EditProfileButton)`
  background: ${(props) => props.theme.linearGradientGradButton};
  color: ${(props) => props.theme.backgroundWhite};
`;

export const UpdateButton = styled.button`
  background-color: rgba(0,0,0,0);
  border: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-content: center;
  padding: 10px 20px;

  * {
    font-size: ${(props) => props.theme.textSizeS};
  }
  
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.black05};
  }
`;

//Images
export const ProfilePictureWrapper = styled.img`
  margin-top: 20px;
  height: 80px;
  width: 80px;
`;

export const ImageWrapper = styled.img`
  opacity: 0.2;
  width: 14px;
  height: 18px;
  margin-right: 10px;
`;

export const CameraWrapper = styled(ImageWrapper)`
  opacity: 1;
  width: 14px;
  height: 18px;
  margin-right: 10px;
`;

//Bottom Layout 
export const ThingsWrapper = styled.div`
  grid-area: tag;
  width: 100%;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.textSizeS};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    p {
      font-size: ${(props) => props.theme.textSizeXS};
    }
  }
 
`;

export const WhatsOnYourMind = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
`;

export const UpdateUserImage = styled.div`
  position: absolute;
  transform: translate(0px, 24px);
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-content: center;
  :hover {
    box-shadow: 0px 10px 20px 0px #0000000d;
    box-shadow: 0px 0px 1px 0px #00000033;
  }`;


export const InputLabelWrapper = styled.label`
  color: ${(props) => props.theme.black50};
  font-size: ${(props) => props.theme.textSizeXS};
`;

export const ThingsLiked = styled.button`
  font-size: ${(props) => props.theme.textSizeXXS};
  background: ${(props) => props.theme.black05};
  border: none;
  border-radius: 18px;
  padding: 8px 25px 8px 16px;
`;



export const ThingsILikeTitle = styled.div`
  font-size: ${(props) => props.theme.textSizeS};
  padding: 20px 0px;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  width: 10px;
  height: 10px;
  margin-left: 5px;
`;

export const FileUpload = styled.input`
  display: none;

  input {
    display: none;
  }
`;

export const ChangeBackgroundImageBtn = styled(EditProfileButton)`
  border: none;
  font-size: 14px;
  position: absolute;
  top: -50px;
  right: 0px;
  color: white;
  opacity: 1;
`;

export const BottomButtons = styled.div`
  margin-top: 30%;
`;
