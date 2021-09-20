import React from "react";
import Header from "../../../Components/Feed_components/Header/index.jsx";
import { FeedMain, PostsBody } from "./styled.js";
import { useEffect, useState } from "react";
import NewPostPopup from "../../../Components/Feed_components/Posts/Popup/NewPost";
import Axios from "../../../API/index.js";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../../Components/Feed_components/Posts/index";
import Masonry from "react-masonry-css";
import "./styles.css";
import PostsInput from "../../../Components/Feed_components/Post_Input/index.jsx";
import { v4 as uuidv4 } from "uuid";


const FeedBody = () => {
  const token = useSelector((state) => state.token);
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showNewPostPopup, setShowNewPostPopup] = useState(false);
  const [refreshFeed, setRefreshFeed] = useState("");
  const [searchPostsFromUsers, setsearchPostsFromUsers] = useState("");

  const searchpostsusers = useSelector(state => state.searchpostsusers);
  //console.log(searchpostsusers);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshFeed(uuidv4());
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []); //server sent event

 
  useEffect(() => {
    async function fetchData() {
      const url = "social/posts/";
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const resp = await Axios.get(url, config);
        if (resp.status === 200) {
          dispatch({
            type: "POSTS",
            payload: resp.data.results,
          });
        }
      } catch (err) {
        if (err.response.status === 400) {
          console.log(err.response);
        }
      }
    }
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
    fetchData();
  }, [refreshFeed, dispatch, token]);

  useEffect(() => {
      setsearchPostsFromUsers(
         //filter
        posts.filter(userposts => {
          return userposts.user.first_name.toLowerCase().includes(searchpostsusers.toLowerCase() )
        })
       
      )
     
    }, [searchpostsusers, posts])

    //console.log(searchPostsFromUsers);

  const onToggleNewPostPopup = () => {
    setShowNewPostPopup(!showNewPostPopup);
  };

  return (
    <FeedMain>
      <Header />
      <PostsBody>
        {showNewPostPopup ? (
          <NewPostPopup togglePopup={onToggleNewPostPopup} user={user.avatar} />
        ) : null}
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts.length > 0 ? (
            <PostsInput
              key="posts-input"
              user={user}
              onClickHandler={onToggleNewPostPopup}
            />
          ) : null}
          {/* //if statement for search funtion */}
          {
            
          searchPostsFromUsers !== posts && searchPostsFromUsers !== "" ? 
            searchPostsFromUsers.map((post) => {
              //console.log("hello");
              return (
                <Post
                  key={post.id}
                  name={`${post.user.first_name} ${post.user.last_name}`}
                  images={post.images}
                  content={post.content}
                  likes={post.amount_of_likes}
                  post={post}
                />
              );
            })
          : ""}
          {
            searchPostsFromUsers === posts ?
            posts.map((post) => {
              //console.log("fsdc");
              return (
                <Post
                  key={post.id}
                  name={`${post.user.first_name} ${post.user.last_name}`}
                  images={post.images}
                  content={post.content}
                  likes={post.amount_of_likes}
                  post={post}
                />
              );
            })
          : ""
          }
        
        </Masonry>
      </PostsBody>
    </FeedMain>
  );
};

export default FeedBody;
