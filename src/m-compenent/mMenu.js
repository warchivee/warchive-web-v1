import React from "react";
import "./mMenu.css";

export default function mMenu(props) {
  return (
    <div className="mMenu-overlay">
      <div className="mMenu-container">
        <div className="mMenu-conatiner__closeBtn">
          <i class="fas fa-times"></i>
        </div>
        <div className="mMenu-container__title">
          <img src="https://i.ibb.co/6DbrQJB/2.png"></img>
          <div className="mMenu-title__label"> 여성서사 아카이브 프로젝트</div>
          <div className="mMenu-title__title">Warchive</div>
        </div>
        <div className="mMenu-container__contents">
          <div className="mMenu-container__contents__row">
            <i className="fas fa-envelope"></i>
            <span className="label">추천작 제보/문의</span>
          </div>
          <div className="mMenu-container__contents__row">
            <i className="fas fa-question-circle"></i>
            <span className="label">도움말</span>
          </div>
        </div>
        <div className="mMenu-container__footer">
          <div className="mMenu-sns">
            <i class="fab fa-twitter-square"></i>
          </div>
          <div className="one-bar"></div>
          <div className="mMenu-container__footer__row">
            <span className="label">추천작 제보, 문의</span>
            <span className="text">team.warchive@gmail.com</span>
          </div>
          <div className="mMenu-container__footer__row">
            <span className="label">후원계좌</span>
            <span className="text">우리 1002 343 024735 ㅇㅈㅇ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
