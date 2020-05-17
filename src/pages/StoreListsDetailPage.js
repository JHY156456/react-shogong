import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import StoreViewerContainer from "../containers/post/StoreViewerContainer";
import Sidebar from "../common/Sidebar";

const StoreListsDetailPage = () => {
  return (
    <>
    <Sidebar />
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
