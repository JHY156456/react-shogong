import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import Selector from "react-select";
import AddrList from "../common/AddrList";
import key from "../../common/key";
import Modal from "../common/modal";
import DaumAPI from "./DaumApi";
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

const SecondRegisterPage = ({ type, onSubmit, error,onChange,form,changeAddress }) => {
  const [open, setOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const addressDetail = useState("");
  // daum pstcode API의 callback 함수
  const handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setZipCode(data.zonecode);
    setAddress(fullAddress);
    changeAddress({key:"shippingAddress",value:fullAddress});
  };
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
          name="businessLicense"
          placeholder="사업자등록증 첨부"
          type="file"
          
        />
        <StyledInput
          name="copyAccount"
          placeholder="통장사본 첨부"
          type="file"
        />
        <strong>사업자주소</strong>
        <StyledInput
          name="businessAddress"
          placeholder="사업자 주소"
          onChange={onChange}
          value={form.businessAddress}
        />
        <strong>배송지 주소</strong>
        <StyledInput
          name="shippingAddress"
          placeholder="눌러서 선택하세요"
          value={address}
          onChange={onChange}
          onClick={() => (open === true ? setOpen(false) : setOpen(true))}
          id={"zipCodeInput"}
        />
        <DaumAPI isOpen={open} handleAddress={handleAddress}></DaumAPI>
        <strong>택배업체</strong>
        <StyledInput
          name="deliveryCompany"
          onChange={onChange}
          value={form.deliveryCompany}
        />
        <strong>택배운임</strong>
        <StyledInput
          name="deliveryFee"
          onChange={onChange}
          value={form.deliveryFee}
        />
        <strong>배송비 조건</strong>
        <StyledInput
          autoComplete="businessOperatorName"
          name="deliveryConditions"
          onChange={onChange}
          value={form.deliveryConditions}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div style={{ textAlign: "right" }}>
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
