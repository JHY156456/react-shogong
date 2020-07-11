import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  register,
  checkRegisteredManufacturer
} from "../../modules/manufacturer";
import ManufacturerStory from "../../components/register/ManufacturerStory";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";
import qs from 'qs';

const ManufacturerForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, check, authError, user,auth } = useSelector(
    ({ manufacturer, user }) => ({
      form: manufacturer.manufacturer,
      check: manufacturer.check,
      authError: manufacturer.authError,
      user: user.user,
      auth: manufacturer.auth
    })
  );
  const [isRegistered, setisRegistered] = useState("true");
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "manufacturer",
        key: name,
        value,
      })
    );
  };
  const temporarySave = {};
  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    console.log(e.keyCode);
    e.preventDefault();
    console.log("제조사이야기 onSubmit");
    const {
      motive,
      toBusinessAbilityPublic,
      toBusinessAbilityPrivate,
      importantIdea,
      valueOrBelief,
      reward,
      orientation,
      otherQuestion,
    } = form;
    // 하나라도 비어있다면
    if (
      [
        motive,
        toBusinessAbilityPublic,
        toBusinessAbilityPrivate,
        importantIdea,
        valueOrBelief,
        reward,
        orientation,
        otherQuestion,
      ].includes("")
    ) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }
    dispatch(register({ form }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm("manufacturer"));
    dispatch(checkRegisteredManufacturer());
  }, [dispatch]);
  /**
   * check : 제조사이야기 진입 전.. 기등록 : 게시글id, 최초등록 : null
   * auth : register완료 후 등록된 게시글id값
   */
  useEffect(() => {
    if(authError){
      console.log("authError");
    }
    if (check||auth) {
      history.push(`/stores/inquire/${check}`);
    } 
  }, [check, authError ,auth,dispatch]);

  return (
    <ManufacturerStory
      isRegistered={isRegistered}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      temporarySave={temporarySave}
    />
  );
};

export default withRouter(ManufacturerForm);
