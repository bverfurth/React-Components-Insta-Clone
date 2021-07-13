import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  export const Posts = (props) => {
    const { likePost, posts } = props;
    const { likePost, post } = props;

    return (
      <div className="posts-container-wrapper">
        {posts.map((post) => {
          return <Post key={post.id} post={post} likePost={likePost} />;
        })}
      </div>
    );
  };
};

export default Posts;
