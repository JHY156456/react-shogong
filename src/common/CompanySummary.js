import React from "react";
import mypic from "../../public/images/1.png";
import styled from "styled-components";
import Button from "../components/common/Button";
import { Grid, Image, Header } from "semantic-ui-react";

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  position: absoulte;
  width: auto;
  height: 50px;
  margin: 1rem;
`;
const CompanySummary = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column  style={{textAlign:"center"}}>
            <a
              href="https://news.naver.com/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=001&amp;aid=0011506837"
              className="cluster_thumb_link nclicks(cls_pol.clsart)"
            >
              <img src={mypic} ></img>
            </a>
          </Grid.Column>
          <Grid.Column width={8} verticalAlign='middle'>
            <Grid.Row>
              <Header as="h3">라아아압슨디자인</Header>
            </Grid.Row>
            <Grid.Row >수수료   사업자 등록번호 123-45-7890</Grid.Row>
          </Grid.Column>
          <Grid.Column textAlign='right'>
            <ButtonWithMarginTop>기본정보수정</ButtonWithMarginTop>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    //   <div>
    //   <li className="cluster_item">
    //     <div className="cluster_thumb">
    //       <div className="cluster_thumb_inner">
    // <a
    //   href="https://news.naver.com/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=001&amp;aid=0011506837"
    //   className="cluster_thumb_link nclicks(cls_pol.clsart)"
    // >
    //   <img
    //     src={mypic}
    //     width="132"
    //     height="90"
    //     alt=""
    //   ></img>
    // </a>
    //       </div>
    //     </div>

    //     <div className="cluster_text">
    //       <a
    //         href="https://news.naver.com/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=001&amp;aid=0011506837"
    //         className="cluster_text_headline nclicks(cls_pol.clsart)"
    //       >
    //         랍슨디자인
    //       </a>
    //       <div
    //         className="cluster_text_info"
    //         data-comment="{gno:'news001,0011506837',params:{sid1:'100'},nclicks:'cmt.count','type':'sectionHomeCluster'}"
    //       >
    //         <div className="cluster_text_press">연합뉴스</div>
    //         <div className="cluster_text_press">연합뉴스</div>
    //       </div>
    //     </div>
    // <ButtonWithMarginTop style={{ float: "right" }}>기본정보수정</ButtonWithMarginTop>
    //   </li>
    // </div>
  );
};
export default CompanySummary;
