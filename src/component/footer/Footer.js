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
            <span className="account">신한은행 110-428-228720 ㅇㅈㅇ</span>
          </div>
        </div>
        <div className="footer-contents__col sns">
          <a
            className="footer-contents-col__row sns-logo"
            href="https://twitter.com/Womynarchive"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>

          <a
            className="footer-contents-col__row sns-logo"
            href="https://www.instagram.com/womynarchive"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
