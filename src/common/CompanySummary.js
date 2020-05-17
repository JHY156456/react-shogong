import React from 'react'
import mypic from '../../public/images/1.png'
import styled from "styled-components";
import Button from "../components/common/Button";

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  position: absoulte;
  width: auto;
  height: 50px;
  margin: 1rem;
`;
const CompanySummary = ()=>{
    return(
        <div>
        <li className="cluster_item">
          <div className="cluster_thumb">
            <div className="cluster_thumb_inner">
              <a
                href="https://news.naver.com/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=001&amp;aid=0011506837"
                className="cluster_thumb_link nclicks(cls_pol.clsart)"
              >
                <img
                  src={mypic}
                  width="132"
                  height="90"
                  alt=""
                ></img>
              </a>
            </div>
          </div>

          <div className="cluster_text">
            <a
              href="https://news.naver.com/main/read.nhn?mode=LSD&amp;mid=shm&amp;sid1=100&amp;oid=001&amp;aid=0011506837"
              className="cluster_text_headline nclicks(cls_pol.clsart)"
            >
              랍슨디자인
            </a>
            <div
              className="cluster_text_info"
              data-comment="{gno:'news001,0011506837',params:{sid1:'100'},nclicks:'cmt.count','type':'sectionHomeCluster'}"
            >
              <div className="cluster_text_press">연합뉴스</div>
              <div className="cluster_text_press">연합뉴스</div>    
            </div>
          </div>
          <ButtonWithMarginTop style={{ float: "right" }}>기본정보수정</ButtonWithMarginTop>
        </li>
      </div>
    )
}
export default CompanySummary;