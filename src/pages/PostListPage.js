import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostListContainer from "../containers/posts/PostListContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";
import Sidebar from "../common/Sidebar";

const PostListPage = () => {
  return (
    <>
    <Sidebar />
    <div id="wrapper">
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <PostListContainer />
        <PaginationContainer />
      </div>
    </section>
    </div>
    </>
  );
};

export default PostListPage;
