import React from "react";
import MenuBar from "../../../Components/Feed_components/Header/Menu_Bar";
import { FeedMain, BackgroundImageProfile } from "./styled";
import EditProfile from "../../../Components/Profile/EditProfile";
import BackgroundImage from "../../../Assets/pngs/profile_backgroundimage.png";
import Background from "../../../Components/Profile/Background";

const ProfileBody = () => {

  return (
    <FeedMain>
      <MenuBar/>
      <Background/>
      {/*<BackgroundImageProfile src={BackgroundImage}/>*/}
      <EditProfile  />
    </FeedMain>
  );
};

export default ProfileBody;
