import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";
import Sidebar from "../common/Sidebar";

const PostPage = () => {
  return (
    <>
    <Sidebar />
    <div id="wrapper">
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <PostViewerContainer/>
      </div>
    </section>
    </div>
    </>
  );
};

export default PostPage;
