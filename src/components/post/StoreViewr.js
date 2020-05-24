import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Helmet } from "react-helmet-async";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import CompanySummary from "../../common/CompanySummary";
const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
  padding: 1rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const StoreViewer = ({ post, error, loading, actionButtons, ownPost }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  const data = [
    { name: "사업자명", value: "2" },
    { name: "판매상품 카테고리", value: "5" },
    { name: "사업자등록증 첨부", value: "4" },
    { name: "통장사본 첨부", value: "4" },
    { name: "사업장 주소", value: "4" },
    { name: "배송지 주소", value: "4" },
    { name: "택배업체", value: "4" },
    { name: "택배운임", value: "4" },
    { name: "배송비조건", value: "4" },
    { name: "주력제조 상품", value: "4" },
    { name: "주요사업", value: "4" },
    { name: "생산국가", value: "4" },
    { name: "운영시작년도", value: "4" },
    { name: "담당자", value: "4" },
    { name: "대표번호", value: "4" },
    { name: "대표 이메일", value: "4" },
  ];
  return (
    <div>
      <PostViewerBlock>
        <CompanySummary></CompanySummary>
      </PostViewerBlock>
      <PostViewerBlock>
        <BootstrapTable data={data}>
          <TableHeaderColumn
            isKey
            dataField="name"
            width="200"
          ></TableHeaderColumn>
          <TableHeaderColumn dataField="value"></TableHeaderColumn>
        </BootstrapTable>
      </PostViewerBlock>
    </div>
  );
};

export default StoreViewer;
