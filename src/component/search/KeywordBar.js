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

function Category(props) {
  return (
    <div className="category-box__bubble-list__bubble">
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        readOnly
        checked={props.isChecked(props.value)}
      ></input>
      <label
        htmlFor={props.id}
        onClick={() => {
          props.setSelectedCategory(props.value);
          props.select({ name: props.name, value: props.value });
          props.setKeywordbarState(!props.keywordbarState);
        }}
      >
        {props.value}
      </label>
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
    display: "none",
  };

  let flex_style = {
    display: "flex",
  };

  let block_style = {
    display: "inline-block",
  };

  let num = 0;

  return (
    <div
      className="selected-keyword-box"
      style={props.state ? flex_style : none_style}
    >
      <div
        className="keywordbar__selected-keyword-list"
        style={props.state ? block_style : none_style}
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
          검색초기화
        </div>
      </div>
    </div>
  );
}

function CategoryList(props) {
  let num = 0;
  return (
    <div className="keywordbar__category-box">
      <div className="category-box__bubble-list">
        {props.value.map((i) => {
          return (
            <Category
              key={props.name + "bubble" + num++}
              id={props.name + "bubble" + num++}
              name={props.name}
              value={i}
              select={props.select}
              setSelectedCategory={props.setSelectedCategory}
              delete={props.delete}
              isChecked={props.isChecked}
              setKeywordbarState={props.setKeywordbarState}
            />
          );
        })}
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
  let none_style = {
    display: "none",
  };

  let flex_style = {
    display: "flex",
  };

  //최초 한번만 실행 아니면 무한루프..
  if (props.isBookmark && props.firstStart) {
    props.setKeywordbarState(false);
    props.setSelectedKeywords([]);
    props.setFirstStart(false);
  }

  return (
    <div className="keywordbar">
      <div class="keywordbar__header">
        <div
          className="keywordbar__button"
          onClick={() => {
            props.setKeywordbarState(!props.keywordbarState);
          }}
        >
          <span className="button__text">
            키워드로 찾기{" "}
            {props.keywordbarState ? (
              <i className="fas fa-angle-up"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )}
          </span>
        </div>
        <CategoryList
          name="category"
          header="카테고리"
          value={props.category}
          setSelectedCategory={props.setSelectedCategory}
          select={props.checkSelectedKeywords}
          isChecked={props.isIncludeSelectedCategory}
          setKeywordbarState={props.setKeywordbarState}
        />
      </div>

      <div
        className="keywordbar__container"
        style={props.keywordbarState ? flex_style : none_style}
      >
        <KeywordList
          name="genre"
          header="장르"
          value={props.genre}
          select={props.checkSelectedKeywords}
          isChecked={props.isIncludeSelectedKeyword}
        />
        <div className="line"></div>
        <KeywordList
          name="platform"
          header="플랫폼"
          value={props.platform}
          select={props.checkSelectedKeywords}
          isChecked={props.isIncludeSelectedKeyword}
        />
        <div className="line"></div>
        <KeywordList
          name="keyword"
          header="키워드"
          value={props.keyword}
          select={props.checkSelectedKeywords}
          isChecked={props.isIncludeSelectedKeyword}
        />
      </div>
      <div className="selected-keyword-container">
        <SelectedKeywordList
          selected_keyword={props.selectedKeywords}
          delete={props.deleteSelectedKeyword}
          init={props.initSelectedKeyword}
          state={props.keywordbarState}
        />
      </div>
    </div>
  );
}
