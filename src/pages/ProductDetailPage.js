import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import StoreViewerContainer from "../containers/post/StoreViewerContainer";

const ProductDetailPage = () => {
  return (
    <>
    <HeaderContainer />
    <div id="wrapper">
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <StoreViewerContainer/>
      </div>
    </section>
    </div>
    </>
  );
};

export default ProductDetailPage;
