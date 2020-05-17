import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../common/Title";
import CompanySummary from "../../common/CompanySummary";
import styled from "styled-components";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "Cj 대한통운",
    "2500원",
    "50,000원 이상 무료배송",
    "VISA ⠀•••• 3719",
    312.44
  )
];
const Go = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function RegisteredBasicInformation() {
  const classes = useStyles();
  return (
    <div>
      <CompanySummary></CompanySummary>
      <Go>
        <Title>배송정보</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>택배사</TableCell>
              <TableCell>배송비</TableCell>
              <TableCell>배송비 조건</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Go>
      <h3></h3>
      <Go>
        <Title>업체정보</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "10px" }}>주력제조상품</TableCell>
              <TableCell >매트리스</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>주요사업</TableCell>
              <TableCell>OEM생산 및 수출</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>생산국가</TableCell>
              <TableCell>대한민국</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>시작년도</TableCell>
              <TableCell>1991</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>담당자</TableCell>
              <TableCell>유도훈</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>대표번호</TableCell>
              <TableCell>02-6951-****</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>대표이메일</TableCell>
              <TableCell>234@naver.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Go>
      {/* <Go>
        <Title>업체정보</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>주력제조상품</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Go> */}
    </div>
  );
}
