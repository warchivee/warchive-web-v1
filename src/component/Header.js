import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header__header-column">
          <div className="header__title">
            <a href=".">
              <img
                className="title__logo"
                src="https://i.ibb.co/WtWVG8r/logo.png"
                alt="warchive logo"
              />
            </a>
          </div>
          <span className="header__icon bookmark" onClick={props.open_bookmark}>
            <i className="fas fa-star"></i>
            <span className="icon__label">즐겨찾기 목록</span>
          </span>
          <span className="header__icon email-popup" onClick={props.open_mail}>
            <i className="fas fa-envelope"></i>
            <span className="icon__label">추천작 제보/문의</span>
          </span>
        </div>
        <div className="header__header-column">
          <span className="header__icon">
            <i className="fas fa-question-circle"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
