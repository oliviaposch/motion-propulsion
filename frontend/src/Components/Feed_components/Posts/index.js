import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import Content from "./Content";

const PostWrapper = styled.div`
  background: #ffffff;
  width: 85%;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 32px;
`;

const Post = ({ post }) => {
  return (
    <PostWrapper>
        <Header user={post.user} />
        <Content post={post} />
        <Footer post={post} />
    </PostWrapper>
  );
};
export default Post;