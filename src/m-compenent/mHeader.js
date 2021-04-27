import React from "react";
import "./mHeader.css";

export default function mHeader(props) {
  return (
    <div className="mheader-container">
      <div className="mheader-contents">
        <div className="mheader-contents__title">
          <div className="menu">
            <i class="fas fa-bars"></i>
          </div>
          <div className="logo">
            <a href=".">
              <img
                src="https://i.ibb.co/WtWVG8r/logo.png"
                alt="warchive logo"
              />
            </a>
          </div>
          <div className="icons">
            <div className="bookmark">
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
        <div className="mheader-contents__searchbar">
          <input type="search" placeholder="제목/작가/감독명으로 검색"></input>
        </div>
      </div>
    </div>
  );
}
