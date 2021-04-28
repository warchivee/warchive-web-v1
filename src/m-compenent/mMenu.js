import React from "react";
import "./mMenu.css";

export default function mMenu(props) {
  let v_style = {
    display: "block",
  };

  let n_style = {
    display: "none",
  };

  return (
    <div className="mMenu-overlay" style={props.isMenu ? v_style : n_style}>
      <div className="mMenu-container">
        <div
          className="mMenu-conatiner__closeBtn"
          onClick={() => props.setIsMenu(false)}
        >
          <i class="fas fa-times"></i>
        </div>
        <div className="mMenu-container__title">
          <img src="https://i.ibb.co/6DbrQJB/2.png"></img>
          <div className="mMenu-title__label"> 여성서사 아카이브 프로젝트</div>
          <div className="mMenu-title__title">Warchive</div>
        </div>
        <div className="mMenu-container__contents">
          <div
            className="mMenu-container__contents__row mail"
            onClick={props.open_mail}
          >
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
            <a
              className="footer-contents-col__row sns-logo"
              href="https://twitter.com/Womynarchive"
              target="_blank"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
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
      <div
        className="mMenu-closeArea"
        onClick={() => props.setIsMenu(false)}
      ></div>
    </div>
  );
}
