import React from "react";
import "./Mail.css";

export default function Mail(props) {
  let style = {
    opacity: "1",
    zIndex: "1",
  };

  let style_close = {
    opacity: "0",
    zIndex: "-1",
  };

  console.log(props.open_mail_flag);

  return (
    <div class="email" style={props.open_mail_flag ? style : style_close}>
      <div class="email__popup">
        <div class="popup__header">
          <div class="header__colomn">
            <i class="fas fa-envelope"></i>
            <span class="icon__label">추천작 제보 및 문의</span>
          </div>
          <div class="header__colomn">
            <div class="close-button" onClick={props.close_mail}>
              <i class="fas fa-times"></i>
            </div>
          </div>
        </div>
        <div class="popup__body">
          <form id="contact-form">
            <input type="hidden" name="contact_number" />
            <div class="body__colomn">
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
            <div class="body__colomn">
              <label>이름</label>
              <input type="text" name="user_name" value="익명" />
            </div>
            <div class="body__colomn">
              <label>답신받을 이메일</label>
              <input type="email" name="user_email" value="noname@email.com" />
            </div>
            <textarea name="message" rows="10"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
