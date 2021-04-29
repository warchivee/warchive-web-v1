import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div className="footer-contents__col">
          <div className="footer-contents-col__row">
            <span className="email-label">연락처</span>
            <span className="email">team.warchive@gmail.com</span>
          </div>
          <div className="footer-contents-col__row">
            <span className="account-label">후원계좌</span>
            <span className="account">우리 1002 343 024735 ㅇㅈㅇ</span>
          </div>
        </div>
        <div className="footer-contents__col">
          <a
            className="footer-contents-col__row sns-logo"
            href="https://twitter.com/Womynarchive"
            target="_blank"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
