import React from "react";
import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
import { Helmet } from "react-helmet-async";
import Sidebar from "../common/Sidebar";

const WritePage = () => {
  return (
    <>
      <Sidebar />
      <div id="wrapper">
        <section id="intro" className="wrapper style1 fullscreen fade-up">
          <div className="inner">
            <Responsive>
              <Helmet>
                <title>글 작성하기 - REACTERS</title>
              </Helmet>
              <EditorContainer />
              <TagBoxContainer />
              <WriteActionButtonsContainer />
            </Responsive>
          </div>
        </section>
      </div>
    </>
  );
};

export default WritePage;
