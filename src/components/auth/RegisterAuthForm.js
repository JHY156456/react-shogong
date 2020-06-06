import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import FirstRegisterPage from "../register/FirstRegisterPage";
import SecondRegisterPage from "../register/SecondRegisterPage";
import ThirdRegisterPage from "../register/ThridRegisterPage";
import ManufacturerStory from "../register/ManufacturerStory";
import RegisteredBasicInformation from "../register/RegisteredBasicInformation";
/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    vertical-align: top;
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const textMap = {
  login: "로그인",
  register: "기본정보",
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const RegisterAuthForm = ({ type, form, onChange, onSubmit, error,changeAddress }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      {(function () {
        if (type === "first")
          return (
            <FirstRegisterPage
              onSubmit={onSubmit}
              form={form}
              onChange={onChange}
              error={error}
            />
          );
        else if (type === "second")
          return (
            <SecondRegisterPage
              onSubmit={onSubmit}
              form={form}
              changeAddress={changeAddress}
              onChange={onChange}
              error={error}
            />
          );
        else if (type === "third")
          return (
            <ThirdRegisterPage
              onSubmit={onSubmit}
              form={form}
              onChange={onChange}
              error={error}
            />
          );
        else if (type === "manufacturer")
          return (
            <ManufacturerStory onSubmit={onSubmit} form={form} error={error} />
          );
        else if (type === "registeredbasicinformation")
          return (
            <RegisteredBasicInformation
              onSubmit={onSubmit}
              form={form}
              error={error}
            />
          );
      })()}
    </AuthFormBlock>
  );
};

export default RegisterAuthForm;
