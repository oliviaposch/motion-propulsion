import {
  //Main Layout
  Wrapper, LeftContainer, RightContainer, BottomContainer,

  //Buttons
  EditProfileButton, SaveProfilButton, UpdateButton,

  ProfilePictureWrapper,
  UpdateUserImage,
  ImageWrapper,
  CameraWrapper,
  BottomButtons,
  ChangeBackgroundImageBtn,
  FileUpload,
  ThingsWrapper, 
} from "./styled";

//Components
import Input from "../Input";
import Thing from "../Thing";
import AddField from "../AddField"

//Files
import RemoveBin from "../../../Assets/svgs/remove_bin.svg";
import UploadArrow from "../../../Assets/svgs/upload_arrow.svg";
import Camera from "../../../Assets/svgs/camera.svg";
import standardAvatar from "../../../Assets/pngs/generic_user.png";

//Framework
import React from "react";
import { useState , useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Axios from "../../../API/index.js";

//Helpers & Middleware
import convertSnakeCase from "../../../Helpers/convertSnakeCase";
import { getUser } from "../../../Store/Actions/getUser";
import { updateImage } from "../../../Store/Actions/updateImage";



const EditProfileWrapper = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const templateUser = useSelector((state) => state.template_profil);

  const [isOpen, setIsOpen] = useState(false);
  const [currentThing, setCurrentThing] = useState("");
  const [templateThings, setTemplateThings] = useState(user.things_user_likes);

  const baseInputFields = ["first_name", "last_name", "email", "username", "location", "phone", "about_me", "password"];


  const findFieldType = (name) => {
    switch (name) {
      case "password":
        return "password";
      case "email":
        return "email";
      default:
        return "text";
    }
  };

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

  const submitChanges = async () => {
    const url = "users/me/";
    const body = {
      email: templateUser.email,
      first_name: templateUser.first_name,
      last_name: templateUser.last_name,
      username: templateUser.username,
      location: templateUser.location,
      about_me: templateUser.about_me,
      things_user_likes: templateThings,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const resp = await Axios.patch(url, body, config);
      if (resp.status === 200) {
        history.push("/profile");
      }
    } catch (err) {
      if (err.response.status === 400) {
        console.log(err.response);
      }
    }
  };

  const updateUserImage = (e) => {
    dispatch(updateImage(e));
  };

  const DeleteThing = (e) => {
    const result = [...templateThings];
    const index = templateThings.indexOf(e.target.id);
    result.splice(index, 1)
    setTemplateThings(result);
  };
  
  const AddThing = (e) => {
    const value = [...templateThings, currentThing];
    setTemplateThings(value)

  };
  
  const handleChange = (e) => {
    setCurrentThing(e.target.value);
  };

  const deleteUser = async (e) => {
    const url = "users/me/";

    const config = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await Axios.delete(url, config);
    history.push("/signup");
  };

  useEffect( () => {
    dispatch(getUser(setTemplateThings));
  }, []);

  return (
    <Wrapper>
      <ChangeBackgroundImageBtn 
        onChange={updateUserImage}>
        <CameraWrapper src={Camera} />
        <label className="custom-file-upload">
          <FileUpload 
            name="banner" 
            type="file" 
            accept="image/png, image/jpg" />
          Update Image
        </label>
      </ChangeBackgroundImageBtn>
      
      <LeftContainer>
        <ProfilePictureWrapper src={user.avatar} />

        <EditProfileButton onClick={setOpen} clicked={isOpen}>
          UPDATE IMAGE
        </EditProfileButton>

        {
        isOpen && (
          <UpdateUserImage>
            <UpdateButton 
              id={"avatar"} 
              onChange={updateUserImage}>
            <label>
              <ImageWrapper src={UploadArrow}/>
              <FileUpload
                name="avatar"
                type="file"
                accept="image/png, image/jpg"
              />
              Upload
            </label>
            </UpdateButton>
            <UpdateButton 
              name="remove" 
              onClick={updateUserImage}>
              <ImageWrapper src={RemoveBin}/>
              <p>Remove</p>
            </UpdateButton>
          </UpdateUserImage>
        )
        }

        <BottomButtons>
          <EditProfileButton onClick={deleteUser}>
            DELETE ACCOUNT
          </EditProfileButton>
          <SaveProfilButton onClick={submitChanges}>SAVE</SaveProfilButton>
        </BottomButtons>
      </LeftContainer>

      <RightContainer>   
        {
          baseInputFields.map((field,index) => {
            return(
            <Input
              key={index}
              name={convertSnakeCase(field)}
              value={user[field]}
              key_name={field}
              type={findFieldType(field)}/>
          )})
        }
      </RightContainer>

      <BottomContainer>
        <ThingsWrapper>
            <p>Things I like</p>
            <ul>
            {
            templateThings.length > 0 ? (
              templateThings.map((item, index) => <Thing handler={DeleteThing} key={index} name={item}/>)) : 
              (<Thing key={"0"} name="Motion"/>)
            }
            </ul>
          </ThingsWrapper>
        <AddField handler={handleChange}/>
        <EditProfileButton className="add" onClick={AddThing}>ADD</EditProfileButton>
      </BottomContainer>

    </Wrapper>
  );
};

export default EditProfileWrapper;
