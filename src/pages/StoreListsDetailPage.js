import React from "react";
import StoreViewerContainer from "../containers/post/StoreViewerContainer";
import HeaderContainer from "../containers/common/HeaderContainer";

const StoreListsDetailPage = () => {
  return (
    <>
    <HeaderContainer />
    <div id="wrapper">
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <StoreViewerContainer />
      </div>
    </section>
    </div>
    </>
  );
};

export default StoreListsDetailPage;
