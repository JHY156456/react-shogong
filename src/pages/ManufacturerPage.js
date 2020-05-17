import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import ManufacturerForm from "../containers/auth/ManufacturerForm";
import Sidebar from "../common/Sidebar";

const ManufacturerPage = () => {
  return (
    <>
      <Sidebar />
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
