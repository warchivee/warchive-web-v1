import React, { useState } from "react";
import "./Mail.css";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

export default function Mail(props) {
  const [tap, setTap] = useState(true); //t = 추천작제보, f = 문의

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const recoTem = `제목:
키워드: 
플랫폼: 
간단소개: `;
  const errTem = ``;

  const [recoContents, setRecoContents] = useState(recoTem);
  const [errContents, setErrContents] = useState(errTem);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleRecoContents = (e) => {
    setRecoContents(e.target.value);
  };

  const handleErrContents = (e) => {
    setErrContents(e.target.value);
  };

  let style = {
    opacity: "1",
    zIndex: "1",
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
      name == "" ||
      email == "" ||
      (tap == true && recoContents == "") ||
      (tap == false && errContents == "")
    ) {
      alert("빈칸을 기입해주세요.");
    } else {
      if (confirm("보내시겠습니까?")) {
        emailjs.sendForm("warchive", "warchive_template", e.target).then(
          (result) => {
            alert("이메일을 성공적으로 전송하였습니다.");
          },
          (error) => {
            alert("이메일 전송해 실패하였습니다.");
            console.log(error);
          }
        );
      } else {
        alert("이메일 전송을 취소하였습니다.");
      }
    }
  }

  function varidation(str) {}

  return (
    <div className="email" style={props.open_mail_flag ? style : style_close}>
      <div className="email__popup">
        <div className="popup__header">
          <div className="header__colomn">
            <i className="fas fa-envelope"></i>
            <span className="icon__label">추천작 제보 및 문의</span>
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
              <div claaName="colomn__body">
                <div className="colomn-body__colomn">
                  <label>이름</label>
                  <input
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={handleName}
                  />
                </div>
                <div className="colomn-body__colomn">
                  <label>답신받을 이메일</label>
                  <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
              </div>
            </div>

            <div className="body__colomn">
              <div className="colomn__header">문의내용</div>
              <div claaName="colomn__body">
                <div className="colomn-body__colomn">
                  <label>메일 유형</label>
                  <div className="radio-container">
                    <div className="radio-box" onClick={() => setTap(true)}>
                      <input
                        type="radio"
                        name="email_type"
                        value="추천작 제보"
                        id="rec"
                        checked={tap}
                      />
                      <label htmlFor="rec">추천작 제보</label>
                    </div>
                    <div className="radio-box" onClick={() => setTap(false)}>
                      <input
                        id="etc"
                        type="radio"
                        name="email_type"
                        value="기타 문의"
                        checked={!tap}
                      />
                      <label htmlFor="etc">기타 문의</label>
                    </div>
                  </div>
                </div>
                <div className="colomn-body__colomn">
                  <label>내용</label>
                  {tap ? (
                    <div>
                      <textarea
                        name="message"
                        rows="10"
                        onChange={handleRecoContents}
                      >
                        {recoContents}
                      </textarea>
                    </div>
                  ) : (
                    <textarea
                      name="message"
                      rows="10"
                      onChange={handleErrContents}
                      placeholder="오류 제보 및 기타 문의사항을 적어주세요."
                    >
                      {errContents}
                    </textarea>
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
