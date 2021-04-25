import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <div className="header-contents">
        <div className="header-contents__col">
          <div className="header-contents-col__title">
            <a href=".">
              <img
                className="title__logo"
                src="https://i.ibb.co/WtWVG8r/logo.png"
                alt="warchive logo"
              />
            </a>
          </div>
          <span
            className={
              props.isBookmark
                ? "header-contents-col__icon open_bookmark"
                : "header-contents-col__icon"
            }
            onClick={props.open_bookmark}
          >
            <i className="fas fa-star"></i>
            <span className="icon__label">즐겨찾기 목록</span>
          </span>
          <span className="header-contents-col__icon" onClick={props.open_mail}>
            <i className="fas fa-envelope"></i>
            <span className="icon__label">추천작 제보/문의</span>
          </span>
        </div>
        <div className="header-contents__col">
          <span className="header-contents-col__icon">
            <i className="fas fa-question-circle"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
