import React from "react";
import PostViewerContainer from "../containers/post/PostViewerContainer";
import HeaderContainer from "../containers/common/HeaderContainer";

const ProductDetailPage = () => {
  return (
    <>
    <HeaderContainer />
    <div id="wrapper">
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <PostViewerContainer />
      </div>
    </section>
    </div>
    </> 
  );
};

export default ProductDetailPage;
