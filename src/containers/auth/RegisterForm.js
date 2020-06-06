import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register,changeAPIField } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import RegisterAuthForm from "../../components/auth/RegisterAuthForm";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    // modules/auth,user리덕스에서 state를 받아서 props에 전달한다
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const [type, setType] = useState("first");
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };
  const changeAddress = (hi)=>{
    const {key,value} = hi;
    dispatch(
      changeAPIField({
        form:"register",
        key:key,
        value:value
      })
    )
  }
  // 폼 등록 이벤트 핸들러
  const onSubmit = (e, buttonId) => {
    e.preventDefault();
    if (buttonId == "firstNext") {
      setType("second");
      return;
    }
    if (buttonId == "currentSecondMoveNext") {
      setType("third");
      return;
    }
    if (buttonId == "currentSecondMovePrev") {
      setType("first");
      return;
    }
    if (buttonId == "currentThirdMovePrev") {
      setType("second");
      return;
    }
    // if(e.target.value == id){
    //   dispatch()
    // }
    const { id, password, passwordConfirm } = form;
    // 하나라도 비어있다면
    if ([id, password, passwordConfirm].includes("")) {
      history.push("/register"); // 홈 화면으로 이동
      setError("빈 칸을 모두 입력하세요.");
      return;
    }
    // 비밀번호가 일치하지 않는다면
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      dispatch(changeField({ form: "register", key: "password", value: "" }));
      dispatch(
        changeField({ form: "register", key: "passwordConfirm", value: "" })
      );
      return;
    }
    console.log("container form : " + form.id);
    dispatch(register(form));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);
  // 회원가입 성공 / 실패 처리
  useEffect(() => {
    if (authError) {
      // 계정명이 이미 존재할 때
      if (authError.response.status === 409) {
        setError("이미 존재하는 계정명입니다.");
        return;
      }
      // 기타 이유
      setError("회원가입 실패");
      return;
    }

    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      history.push("/");
      //dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      // console.log("check API 성공");
      // console.log(user);
      // history.push("/SecondRegisterPage"); // 홈 화면으로 이동
      
    }
  }, [history, user]);

  return (
    <RegisterAuthForm
      type={type}
      form={form}
      changeAddress={changeAddress}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
