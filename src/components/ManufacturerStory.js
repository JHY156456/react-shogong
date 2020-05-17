import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../lib/styles/palette";
import Button from "./common/Button";
import "react-calendar/dist/Calendar.css";
import CompanySummary from "../common/CompanySummary"
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

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  display: table-cell;
  border: none;
  color: black;
  width: 100%;
  height: 180px;
  border: 1px solid ${palette.gray[5]};
  padding: 0.5rem;
  outline: none;
  margin-bottom: 3rem;
  &:focus {
    color: $oc-teal-7;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  position: absoulte;
  width: auto;
  height: 50px;
  margin: 1rem;
`;

const textMap = {
  login: "로그인",
  register: "기본정보"
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
const ManufacturerStory = ({ type, form, onChange, onSubmit, error }) => {
  const hi = textMap[type];
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState("");
  const openCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <AuthFormBlock>
      <h3>{hi}</h3>
      <CompanySummary></CompanySummary>
      <ButtonWithMarginTop
        onClick={e => onSubmit(e, e.target.id)}
        type="submit"
        id="temporarySave"
        form="myform"
        cyan
        fullWidth
        style={{ marginTop: "1rem", float: "right" }}
      >
        {"임시저장"}
      </ButtonWithMarginTop>
      <form onSubmit={onSubmit} id="myform" style={{ width: "100%" }}>
        <strong>어떤 계기로 시작된 사업인가요?</strong>
        <StyledInput
          autoComplete="username"
          name="username"
          onChange={onChange}
          value={form.username}
        />
        <strong>
          지금까지의 생산 업력을 적어주세요. 공개 가능 생산 업력(컨텐츠에
          활용됩니다.)
        </strong>
        <StyledInput
          autoComplete="new-password"
          name="password"
          onChange={onChange}
          value={form.password}
        />
        <strong>
          지금까지의 생산 업력을 적어주세요. 공개 불가능 생산 업력(쇼공이
          제조공장을 이해하는데 필요합니다.)
        </strong>
        <StyledInput
          autoComplete="new-password"
          name="passwordConfirm"
          type="password"
          onChange={onChange}
          value={form.passwordConfirm}
        />
        <strong>
          제품을 생산하실 때 가장 중요하게 생각하는 점은 무엇인가요?
        </strong>
        <StyledInput
          autoComplete="businessLicenseNumber"
          name="businessLicenseNumber"
          onChange={onChange}
          onClick={openCalendar}
          value={date}
        />
        <strong>대표님 / 회사가 추구하는 가치나 신념에 대해 말해주세요.</strong>
        <StyledInput
          autoComplete="businessOperatorName"
          name="businessOperatorName"
          onChange={onChange}
          value={form.businessOperatorName}
        />
        <strong>제조사로서 보람을 느끼는 수간이 있다면 언제 인가요?</strong>
        <StyledInput
          autoComplete="businessOperatorName"
          name="businessOperatorName"
          onChange={onChange}
          value={form.businessOperatorName}
        />
        <strong>앞으로의 각오 및 방향성에 대해 말씀해주세요.</strong>
        <StyledInput
          autoComplete="businessOperatorName"
          name="businessOperatorName"
          onChange={onChange}
          value={form.businessOperatorName}
        />
        <strong>질문 외에 다른 하실 말씀이 있으신가요?</strong>
        <StyledInput
          autoComplete="businessOperatorName"
          name="businessOperatorName"
          onChange={onChange}
          value={form.businessOperatorName}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop
          cyan
          fullWidth
          style={{ marginTop: "1rem" }}
          style={{ float: "right" }}
        >
          {"가입하기"}
        </ButtonWithMarginTop>
      </form>
      <Footer></Footer>
    </AuthFormBlock>
  );
};

export default ManufacturerStory;
