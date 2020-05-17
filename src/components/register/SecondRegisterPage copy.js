import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import Selector from "react-select";
import AddrList from "../common/AddrList";
import key from "../../common/key";
import Modal from "../common/modal";

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
  margin-bottom: 5rem;
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

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  position: absoulte;
  width: auto;
  height: 50px;
  margin: 1rem;
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
const techCompanies = [
  { label: "박윤범", value: 1 },
  { label: "개룐", value: 2 },
  { label: "입니다", value: 3 },
];

const SecondRegisterPage = ({ type, form, onChange, onSubmit, error }) => {
  // const [text, setText] = useState("");
  // const [addrs, setAddrs] = useState([]);
  // const [isModalOpen, toggleModal] = useState(false);
  // const [post, setPost] = useState("");
  // const [detail, setDetail] = useState("");

  const inputEl = useRef(null);
  // useEffect(() => {
  //   if (localStorage.getItem("post")) {
  //     setPost(localStorage.getItem("post"));
  //     setDetail(localStorage.getItem("detail"));
  //   }
  //   inputEl.current.focus();
  // }, [post, isModalOpen]);

  // const setInputText = (e) => {
  //   setText(e.target.value);
  // };

  // const onChangePost = (e) => {
  //   setPost(e.target.value);
  // };
  // const onChangeDetail = (e) => {
  //   setDetail(e.target.value);
  // };

  // const pushAddrs = (json) => {
  //   let tempAddr = [];
  //   if (json.results.juso.length === 0) {
  //     setAddrs([]);
  //     alert("해당 주소가 없습니다. 다시 입력하세요");
  //   } else {
  //     json.results.juso.map((addr) => {
  //       return tempAddr.push(addr.zipNo + " " + addr.roadAddr);
  //     });
  //     setAddrs(tempAddr);
  //   }
  // };

  // const search = () => {
  //   toggleModal(!isModalOpen);
  //   setAddrs([]);
  //   setText("");
  // };

  // const findAddress = () => {
  //   setText("");

  //   if (text.length < 2) {
  //     alert("주소가 너무 짧습니다. 다시 입력하세요");
  //   } else {
  //     fetch(
  //       `http://www.juso.go.kr/addrlink/addrLinkApi.do?currrentPage=1&countPerPage=100&keyword=${text}&confmKey=${key}=&resultType=json`
  //     )
  //       .then((res) => res.json())
  //       .then((json) => pushAddrs(json))
  //       .catch((err) => console.log(err));
  //   }
  // };

  const hi = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{hi}</h3>
      <div style={{ float: "right" }}>
        <ButtonWithMarginTop
          onClick={(e) => onSubmit(e, e.target.id)}
          type="submit"
          id="temporarySave"
          form="myform"
          cyan
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          {"임시저장"}
        </ButtonWithMarginTop>
      </div>
      <form onSubmit={(e) => onSubmit(e, "secondNext")} id="myform">
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="사업자등록증 첨부"
          type="file"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="통장사본 첨부"
          type="file"
          onChange={onChange}
          value={form.password}
        />
        <StyledInput
          autoComplete="new-password"
          name="passwordConfirm"
          placeholder="사업자 주소"
          type="password"
          onChange={onChange}
          value={form.passwordConfirm}
        />
        <strong>배송지 주소</strong>
        <StyledInput
          autoComplete="businessLicenseNumber"
          name="businessLicenseNumber"
          placeholder="눌러서 선택하세요"
          onClick={search}
          value={detail}
          onChange={onChangeDetail}
        />
        {/* <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <input
            placeholder="주소 검색"
            value={text}
            onChange={setInputText}
            ref={inputEl}
          />
          <Button type="button" onClick={findAddress}>
            검색
          </Button>
          <ul>
            <AddrList
              list={addrs}
              toggle={toggleModal}
              setPost={setPost}
              setDetail={setDetail}
            />
          </ul>
        </Modal> */}
        <strong>택배업체</strong>
        <StyledInput
          autoComplete="businessOperatorName"
          name="businessOperatorName"
          onChange={onChange}
          value={form.businessOperatorName}
        />
        <strong>택배운임</strong>
        <StyledInput
          autoComplete="businessOperatorName"
          name="businessOperatorName"
          onChange={onChange}
          value={form.businessOperatorName}
        />
        <strong>배송비 조건</strong>
        <StyledInput
          autoComplete="businessOperatorName"
          name="businessOperatorName"
          onChange={onChange}
          value={form.businessOperatorName}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div style={{ float: "right" }}>
          <ButtonWithMarginTop
            onClick={(e) => onSubmit(e, "currentSecondMovePrev")}
            cyan
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            {"이전"}
          </ButtonWithMarginTop>
          <ButtonWithMarginTop
            onClick={(e) => onSubmit(e, "currentSecondMoveNext")}
            cyan
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            {"다음"}
          </ButtonWithMarginTop>
        </div>
      </form>
      <Footer></Footer>
    </AuthFormBlock>
  );
};

export default SecondRegisterPage;
