import React from "react";
import "./Mail.css";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

export default function Mail(props) {
  let style = {
    opacity: "1",
    zIndex: "1",
  };

  let style_close = {
    opacity: "0",
    zIndex: "-1",
  };

  function sendEmail(e) {
    init("user_K30JVUSlyUKXFRdUVpXl5");

    e.preventDefault();

    emailjs.sendForm("warchive", "warchive_template", e.target).then(
      (result) => {
        alert("SUCCESS!");
      },
      (error) => {
        alert("ERROR!");
        console.log(error);
      }
    );
  }

  return (
    <div className="email" style={props.open_mail_flag ? style : style_close}>
      <div className="email__popup">
        <div className="popup__header">
          <div className="header__colomn">
            <i className="fas fa-envelope"></i>
            <span className="icon__label">추천작 제보 및 문의</span>
          </div>
          <div className="header__colomn">
            <div className="close-button" onClick={props.close_mail}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
        <div className="popup__body">
          <form id="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div className="body__colomn">
              <label>메일 유형</label>
              <select name="email_type">
                <option id="title" value="추천작 제보">
                  추천작 제보
                </option>
                <option id="creator" value="문의">
                  문의
                </option>
              </select>
            </div>
            <div className="body__colomn">
              <label>이름</label>
              <input type="text" name="user_name" />
            </div>
            <div className="body__colomn">
              <label>답신받을 이메일</label>
              <input type="email" name="user_email" />
            </div>
            <textarea name="message" rows="10"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
