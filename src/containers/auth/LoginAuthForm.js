import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, login, test } from "../../modules/auth";
import SignIn from "../../pages/SingIn";
import { check } from "../../modules/user";

const LoginAuthForm = ({ history, location }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); //리덕스 스토어에 접근
  const { form, loginAuth, authError, user, meta,checkError } = useSelector(
    ({ auth, user }) => ({
      form: auth.login,
      loginAuth: auth.loginAuth,
      authError: auth.authError,
      user: user.user,
      meta: auth.meta,
      checkError : user.checkError,
    })
  ); //리덕스가 가지고있는 상태값
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    let { value, name } = e.target;
    if (name == "savePassword") {
      console.log(form.savePassword);
      value = !form.savePassword;
    }
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { id, password } = form;
    if (form.savePassword == true) {
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("loginauthform submit localStorage is not working");
      }
    }
    console.log("loginauthForm.js submit");
    dispatch(login({ id, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm("login"));
    try {
      if (location.state != null) {
        if (location.state.reason) {
          console.log(location.state.reason);
          alert("로그인 부탁해요");
          history.replace("", null);
        }
      }
    } catch (e) {}
  }, [dispatch]);

  useEffect(() => {
    if (loginAuth != null) {
      var objectValues = loginAuth;
      for (var key in objectValues) {
        console.log("attr: " + key + ", value: " + objectValues[key]);
      }
    }
    // consol.log("??");
    if (authError) {
      console.log("authError : " + authError.status);
      // if (authError.response.status == 401) {
      //   console.log(authError.response);
      // }
      alert("네트워크 오류가 발생했습니다.\n관리자에게 문의해주세요");
      setError("로그인 실패");
      return;
    }
    if (loginAuth) {
      console.log("로그인 성공");
      localStorage.setItem(
        "access_token",
        loginAuth.user_TOKEN
      );
      console.log(meta.status);
      dispatch(check());
    }
  }, [loginAuth, authError, dispatch]);


  //check함수를 위함.
  useEffect(() => {
    if (user) {
      console.log("LoginAuthForm if user");
      history.push("/register");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("loginauthform localStorage is not working");
      }
    }
    if(checkError){
      alert("네트워크 오류가 발생했습니다.\n관리자에게 문의해주세요");
    }
  }, [history, user]);

  return (
    <SignIn
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginAuthForm);
