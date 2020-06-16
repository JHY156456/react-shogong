import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import StyledButton from "../common/Button";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import posed from "react-pose";
import CalendarModal from "../common/CalendarModal";
import { Button } from "semantic-ui-react";
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
  width: 360px;
  border: 1px solid ${palette.gray[5]};
  padding: 0.5rem;
  outline: none;
  margin-bottom: 3rem;
  &:focus {
    color: $oc-teal-7;
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
const ThirdRegisterPage = ({ type, form, onChange, onSubmit, error }) => {
  const hi = textMap[type];
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState("");
  const onDateChange = (date) => {
    console.log(date);
    setDate(moment(date).format("YYYY-MM-DD"));
  };
  const openCalendar = () => {
    console.log(isCalendarOpen);
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <AuthFormBlock>
      <h3>{hi}</h3>
      <div style={{ float: "right" }}>
        <Button
          onClick={(e) => onSubmit(e, e.target.id)}
          type="submit"
          id="temporarySave"
          form="myform"
          cyan
          style={{ marginTop: "1rem" }}
        >
          {"임시저장"}
        </Button>
      </div>
      <form onSubmit={onSubmit} id="myform">
        <strong>주력제조상품</strong>
        <StyledInput
          name="mainProducts"
          onChange={onChange}
          value={form.mainProducts}
        />
        <strong>주요사업</strong>
        <StyledInput
          name="majorBusiness"
          onChange={onChange}
          value={form.majorBusiness}
        />
        <strong>생산국가</strong>
        <StyledInput
          name="producingCountry"
          onChange={onChange}
          value={form.producingCountry}
        />
        <strong>운영시작년도</strong>
        <StyledInput
          name="operationStartYear"
          onChange={onChange}
          onClick={openCalendar}
          value={date}
          placeholder="눌러서 선택해주세요"
        />
        <CalendarModal
          isOpen={isCalendarOpen}
          toggle={setIsCalendarOpen}
          initialPose="closed"
          pose={isCalendarOpen ? "open" : "closed"}
        >
          <Calendar onChange={onDateChange} />
        </CalendarModal>
        <strong>담당자</strong>
        <StyledInput name="manager" onChange={onChange} value={form.manager} />
        <strong>대표번호</strong>
        <StyledInput
          name="representativeNumber"
          onChange={onChange}
          value={form.representativeNumber}
        />
        <strong>대표이메일</strong>
        <StyledInput
          name="representativeEmail"
          placeholder="대표번호"
          onChange={onChange}
          value={form.representativeEmail}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div style={{ textAlign: "right" }}>
          <Button
            onClick={(e) => onSubmit(e, "currentThirdMovePrev")}
            cyan
            style={{ marginTop: "1rem" }}
            primary
          >
            {"이전"}
          </Button>
          <Button cyan style={{ marginTop: "1rem" }} secondary>
            {"가입하기"}
          </Button>
        </div>
      </form>
      <Footer></Footer>
    </AuthFormBlock>
  );
};

export default ThirdRegisterPage;
