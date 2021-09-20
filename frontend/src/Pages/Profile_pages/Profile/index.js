import React from "react";
import MenuBar from "../../../Components/Feed_components/Header/Menu_Bar/";
import { FeedMain, BackgroundImageProfile } from "./styled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "../../../API/index.js";
import Profile from "../../../Components/Profile/Profile";
import BackgroundImage from "../../../Assets/pngs/profile_backgroundimage.png";
import Post from "../../../Components/Feed_components/Posts/index";
import Masonry from "react-masonry-css";
import "./styles.css";

const ProfileBody = (props) => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const userPosts = useSelector((state) => state.user_posts);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProfile() {
      const url = "users/me/";
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const resp = await Axios.get(url, config);
        if (resp.status === 200) {
          dispatch({
            type: "FETCHPROFILE",
            payload: resp.data,
          });
        }
      } catch (err) {
        if (err.response.status === 400) {
          console.log(err.response);
        }
      }
    }
    fetchProfile();
  }, [dispatch, token]);

  useEffect(() => {
    async function fetchUserPosts() {
      const url = "social/posts/me/?limit=25&offset=0";
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const resp = await Axios.get(url, config);
        if (resp.status === 200) {
          dispatch({
            type: "USERPOSTS",
            payload: resp.data.results,
          });
        }
      } catch (err) {
        if (err.response.status === 400) {
          console.log(err.response);
        }
      }
    }
    fetchUserPosts();
  }, [dispatch, token]);

  return (
    <FeedMain>
      <MenuBar />
      <BackgroundImageProfile src={BackgroundImage} />
      <Profile user={user} />
      <Masonry
        breakpointCols={2}
        className="profile-grid"
        columnClassName="profile-grid_column"
      >
        {userPosts.length > 0
          ? userPosts.map((post) => {
              return <Post post={post} key={post} />;
            })
          : null}
      </Masonry>
    </FeedMain>
  );
};

export default ProfileBody;
