import React, { useRef } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import StyledButton from "../common/Button";
import Selector from "react-select";
import { Button } from 'semantic-ui-react'

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
const techCompanies = [
  { label: "박윤범", value: 1 },
  { label: "개룐", value: 2 },
  { label: "입니다", value: 3 },
];
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
/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;
const FirstRegisterPage = ({ onSubmit, onChange,form, error }) => {
  const colourStyles = {
    control: styles => ({ ...styles, width: '360px' }),
    container: styles => ({ ...styles, width: '360px' }),
  };
  return (
    <div>
      <div style={{ float: "right" }}>
        <Button
          onClick={(e) => onSubmit(e, e.target.id)}
          type="submit"
          id="temporarySave"
          form="myform"
          cyan
          style={{ marginTop: "1rem" }}
        >
          {/* <ButtonWithMarginTop
          onClick={e => onSubmit(e, e.target.id)}
          type="submit"
          id="temporarySave"
          form="myform"
          cyan
          fullWidth
          style={{ marginTop: "1rem" }}
        > */}
          {"임시저장"}
        </Button>
      </div>
      <form onSubmit={onSubmit} id="myform">
        <strong>아이디</strong>
        <StyledInput
          type="text"
          name="id"
          value={form.id}
          onChange={onChange}
        />
        <strong>비밀번호</strong>
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={form.password}
          onChange={onChange}
        />
        <StyledInput
          autoComplete="new-password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          type="password"
          value={form.passwordConfirm}
          onChange={onChange}
        />
        <strong>사업자등록번호</strong>
        <StyledInput
          autoComplete="businessLicenseNumber"
          name="businessLicenseNumber"
          placeholder="사업자등록번호"
          value={form.businessLicenseNumber}
          onChange={onChange}
        />
        <strong>사업자명</strong>
        <StyledInput
          autoComplete="businessOperatorName"
          name="businessOperatorName"
          placeholder="사업자명"
          value={form.businessOperatorName}
          onChange={onChange}
        />
        <Selector placeholder="판매상품 카테고리" options={techCompanies} styles={colourStyles} name="sellCategory" />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div style={{ textAlign: "right" }}>
          <Button
            onClick={(e) => onSubmit(e,"firstNext")}
            cyan
            style={{ marginTop: "1rem" }}
            secondary
          >
            {"다음"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default FirstRegisterPage;
