import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__col">
        <div className="footer-col__row">
          <span className="footer-col-row__label">추천작 제보, 문의</span>
          <span className="footer-col-row__text">team.warchive@gmail.com</span>
        </div>
        <div className="footer-col__row">
          <span className="footer-col-row__label">후원계좌</span>
          <span className="footer-col-row__text">농협 333-3333-3333</span>
        </div>
      </div>
      <div className="footer__col">
        <div className="footer-col__row footer_sns">
          <i className="fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
