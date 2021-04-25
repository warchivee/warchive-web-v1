import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div className="footer-contents__col">
          <div className="footer-contents-col__row">
            <span className="email-label">추천작 제보, 문의</span>
            <span className="email">team.warchive@gmail.com</span>
          </div>
          <div className="footer-contents-col__row">
            <span className="account-label">후원계좌</span>
            <span className="account">농협 333-3333-3333</span>
          </div>
        </div>
        <div className="footer-contents__col">
          <div className="footer-contents-col__row sns-logo">
            <i className="fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
