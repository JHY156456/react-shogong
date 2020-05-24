import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import ManufacturerForm from "../containers/auth/ManufacturerForm";
import HeaderContainer from "../containers/common/HeaderContainer";

const ManufacturerPage = () => {
  return (
    <>
      <HeaderContainer />
      <div id="wrapper">
        <section id="intro" className="wrapper style1 fullscreen fade-up">
          <div className="inner">
            <AuthTemplate>
              <ManufacturerForm />
            </AuthTemplate>
          </div>
        </section>
      </div>
    </>
  );
};
export default ManufacturerPage;
