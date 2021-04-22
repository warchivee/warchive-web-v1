import React, { useState } from "react";
import "./KeywordBar.css";

function SelectedBubble(props) {
  return (
    <div
      id={props.id}
      className="selected-keyword-list__bubble"
      onClick={() => {
        props.delete({ name: props.name, value: props.value });
      }}
    >
      <span>{props.value}</span>
      <i className="fas fa-times"></i>
    </div>
  );
}

function Bubble(props) {
  return (
    <div className="bubble-list__bubble">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        readOnly
        checked={props.isChecked({ name: props.name, value: props.value })}
      ></input>
      <label
        htmlFor={props.id}
        onClick={() => {
          props.select({ name: props.name, value: props.value });
        }}
      >
        {props.value}
      </label>
    </div>
  );
}

function SelectedKeywordList(props) {
  let none_style = {
    height: "0px",
    padding: "0px",
  };

  let flex_style = {
    minHeight: "35px",
    padding: "5px",
  };

  let num = 0;

  return (
    <div
      className="selected-keyword-container"
      style={props.state ? flex_style : none_style}
    >
      <div
        className="keywordbar__selected-keyword-list"
        style={props.state ? flex_style : none_style}
      >
        {props.selected_keyword ? (
          props.selected_keyword.map((i) => {
            return (
              <SelectedBubble
                key={i.name + "selectbubble" + num++}
                id={i.name + "selectbubble" + num++}
                name={i.name}
                value={i.value}
                delete={props.delete}
                state={props.state}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      <div style={props.state ? flex_style : none_style}>
        <div
          className="init-keyword-button"
          onClick={() => {
            props.init();
          }}
        >
          키워드 초기화
        </div>
      </div>
    </div>
  );
}

function KeywordList(props) {
  let num = 0;
  return (
    <div className="keywordbar__keyword-box">
      <h3 className="keyword-box__header">{props.header}</h3>
      <div className="keyword-box__bubble-list">
        {props.value.map((i) => {
          return (
            <Bubble
              key={props.name + "bubble" + num++}
              id={props.name + "bubble" + num++}
              name={props.name}
              value={i}
              select={props.select}
              delete={props.delete}
              isChecked={props.isChecked}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function KeywordBar(props) {
  const [keywordbarState, setKeywordbarState] = useState(false);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [firstStart, setFirstStart] = useState(true);

  const initSelectedKeyword = () => {
    setSelectedKeywords([]);
    props.search_keywordbar("none", "init", 0);
  };

  const addSelectedKeyword = (keyword) => {
    if (!isIncludeSelectedKeyword(keyword.name)) {
      setSelectedKeywords([...selectedKeywords, keyword]);
      props.search_keywordbar(keyword.name, "add", keyword.value);
    }
  };

  const deleteSelectedKeyword = (keyword) => {
    if (isIncludeSelectedKeyword(keyword)) {
      let d = selectedKeywords.filter((e) => {
        if (!(e.name == keyword.name && e.value == keyword.value)) return e;
      });

      setSelectedKeywords(d);
      props.search_keywordbar(keyword.name, "delete", keyword.value);
    }
  };

  const checkSelectedKeywords = (keyword) => {
    if (isIncludeSelectedKeyword(keyword)) {
      deleteSelectedKeyword(keyword);
    } else {
      addSelectedKeyword(keyword);
    }
  };

  const isIncludeSelectedKeyword = (keyword) => {
    for (let i = 0; i < selectedKeywords.length; i++) {
      if (
        selectedKeywords[i].name == keyword.name &&
        selectedKeywords[i].value == keyword.value
      )
        return true;
    }

    return false;
  };

  let none_style = {
    height: "0px",
  };

  let flex_style = {
    height: "400px",
  };

  //최초 한번만 실행 아니면 무한루프..
  if (props.isBookmark && firstStart) {
    setKeywordbarState(false);
    setSelectedKeywords([]);
    setFirstStart(false);
  }

  return (
    <div className="keywordbar">
      <SelectedKeywordList
        selected_keyword={selectedKeywords}
        delete={deleteSelectedKeyword}
        init={initSelectedKeyword}
        state={keywordbarState}
      />
      <div
        className="keywordbar__container"
        style={keywordbarState ? flex_style : none_style}
      >
        <KeywordList
          name="category"
          header="카테고리"
          value={props.category}
          select={checkSelectedKeywords}
          isChecked={isIncludeSelectedKeyword}
        />
        <KeywordList
          name="sub_category"
          header="서브카테고리"
          value={props.sub_category}
          select={checkSelectedKeywords}
          isChecked={isIncludeSelectedKeyword}
        />
        <KeywordList
          name="genre"
          header="장르"
          value={props.genre}
          select={checkSelectedKeywords}
          isChecked={isIncludeSelectedKeyword}
        />
        <KeywordList
          name="platform"
          header="플랫폼"
          value={props.platform}
          select={checkSelectedKeywords}
          isChecked={isIncludeSelectedKeyword}
        />
        <KeywordList
          name="keyword"
          header="키워드"
          value={props.keyword}
          select={checkSelectedKeywords}
          isChecked={isIncludeSelectedKeyword}
        />
      </div>
      <div
        className="keywordbar__button"
        onClick={() => {
          setKeywordbarState(!keywordbarState);
        }}
      >
        <span className="button__text">키워드로 찾기</span>
      </div>
    </div>
  );
}
