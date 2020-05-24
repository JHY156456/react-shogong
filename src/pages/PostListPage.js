import React from "react";
import PostListContainer from "../containers/posts/PostListContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";
import HeaderContainer from "../containers/common/HeaderContainer";

const PostListPage = () => {
  return (
    <>
    <HeaderContainer />
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
