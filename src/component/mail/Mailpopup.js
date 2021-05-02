import React, { useState } from "react";
import "./Mailpopup.css";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

export default function Mail(props) {
  let style = {
    opacity: "1",
    zIndex: "4",
  };

  let style_close = {
    opacity: "0",
    zIndex: "-1",
  };

  function confirm(msg) {
    if (window.confirm(msg) != 0) {
      return true;
    } else {
      return false;
    }
  }

  function sendEmail(e) {
    init("user_K30JVUSlyUKXFRdUVpXl5");

    e.preventDefault();

    if (
      props.name == "" ||
      props.email == "" ||
      (props.tap == true && props.recoContents == "") ||
      (props.tap == false && props.errContents == "")
    ) {
      alert("빈칸을 기입해주세요.");
    } else {
      if (confirm("보내시겠습니까?")) {
        console.log(props.isDisabled);
        if (props.isDisabled) {
          alert("잠시 후에 다시 시도해주세요.");
          return false;
        } else {
          props.setIsDisabled(true);

          emailjs.sendForm("warchive", "warchive_template", e.target).then(
            (result) => {
              alert("이메일을 성공적으로 전송하였습니다.");
              props.init();
              setTimeout(() => {
                props.setIsDisabled(false);
              }, 60000 * 3);
            },
            (error) => {
              alert("이메일 전송해 실패하였습니다. 다시 시도해주세요.");
            }
          );
        }
      } else {
        alert("이메일 전송을 취소하였습니다.");
      }
    }
  }

  return (
    <div
      className="email-popup-overlay"
      style={props.open_mail_flag ? style : style_close}
    >
      <div className="email-popup-container">
        <div className="email-popup-container__header">
          <div className="header__colomn">
            <i className="fas fa-envelope"></i>
            <span className="icon__label">추천작제보/문의</span>
          </div>
          <div className="header__colomn">
            <div
              className="close-button"
              onClick={() => props.close_mail(false)}
            >
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>

        <div className="popup__body">
          <form id="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div className="body__colomn">
              <div className="colomn__header">문의자 정보</div>
              <div className="colomn__body">
                <div className="colomn-body__colomn">
                  <input
                    type="text"
                    name="user_name"
                    value={props.name}
                    onChange={props.handleName}
                    placeholder="이름"
                  />
                </div>
                <div className="colomn-body__colomn">
                  <input
                    type="email"
                    name="user_email"
                    value={props.email}
                    onChange={props.handleEmail}
                    placeholder="이메일"
                  />
                </div>
              </div>
            </div>

            <div className="body__colomn">
              <div className="colomn__header">문의내용</div>
              <div className="colomn__body">
                <div className="colomn-body__colomn">
                  <div className="radio-container">
                    <div
                      className="radio-box"
                      onClick={() => props.setTap(true)}
                    >
                      <input
                        type="radio"
                        name="email_type"
                        value="추천작 제보"
                        id="rec"
                        checked={props.tap}
                        readOnly
                      />
                      <label htmlFor="rec">추천작 제보</label>
                    </div>
                    <div
                      className="radio-box"
                      onClick={() => props.setTap(false)}
                    >
                      <input
                        id="etc"
                        type="radio"
                        name="email_type"
                        value="기타 문의"
                        checked={!props.tap}
                        readOnly
                      />
                      <label htmlFor="etc">기타 문의</label>
                    </div>
                  </div>
                </div>
                <div className="colomn-body__colomn">
                  {props.tap ? (
                    <div className="textarea">
                      <textarea
                        name="message"
                        rows="10"
                        onChange={props.handleRecoContents}
                        value={props.recoContents}
                      ></textarea>
                    </div>
                  ) : (
                    <textarea
                      name="message"
                      rows="10"
                      onChange={props.handleErrContents}
                      placeholder="오류 제보 및 기타 문의사항을 적어주세요."
                      value={props.errContents}
                    ></textarea>
                  )}
                </div>
              </div>
            </div>
            <input type="submit" value="보내기" />
          </form>
        </div>
      </div>
    </div>
  );
}
