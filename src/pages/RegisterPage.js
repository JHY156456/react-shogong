import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterForm from "../containers/auth/RegisterForm";
import HeaderContainer from "../containers/common/HeaderContainer";

const RegisterPage = () => {
  return (
    <>
      <HeaderContainer />
      <div id="wrapper">
        <section id="intro" className="wrapper style1 fullscreen fade-up">
          <div className="inner">
            <AuthTemplate>
              <RegisterForm />
            </AuthTemplate>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterPage;
