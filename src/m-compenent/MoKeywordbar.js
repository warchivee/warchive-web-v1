import React from "react";
import "./MoKeywordbar.css";

function SelectedBubble(props) {
  return (
    <div
      id={props.id}
      className="mSelected-keyword-list__bubble"
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
    <div className="mBubble-list__bubble">
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
        }}
      >
        {props.value}
      </label>
    </div>
  );
}

function Bubble(props) {
  return (
    <div className="mBubble-list__bubble">
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

function CategoryList(props) {
  let num = 0;
  return (
    <div className="mKeywordbar__keyword-box">
      <h3 className="mKeyword-box__header">{props.header}</h3>
      <div className="mKeyword-box__bubble-list">
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
            />
          );
        })}
      </div>
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

  let num = 0;

  return (
    <div
      className="mSelected-keyword-container"
      style={props.state ? flex_style : none_style}
    >
      <div
        className="mKeywordbar__selected-keyword-list"
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
          className="mInit-keyword-button"
          onClick={() => {
            props.init();
          }}
        >
          <i class="fas fa-redo"></i>
        </div>
      </div>
    </div>
  );
}

function KeywordList(props) {
  let num = 0;
  return (
    <div className="mKeywordbar__keyword-box">
      <h3 className="mKeyword-box__header">{props.header}</h3>
      <div className={"mKeyword-box__bubble-list " + props.name}>
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
    height: "0px",
  };

  let flex_style = {
    height: "100%",
  };

  //최초 한번만 실행 아니면 무한루프..
  if (props.isBookmark && props.firstStart) {
    props.setKeywordbarState(false);
    props.setSelectedKeywords([]);
    props.setFirstStart(false);
  }

  return (
    <div className="mKeywordbar">
      <div
        className="mKeywordbar__button"
        onClick={() => {
          props.setKeywordbarState(!props.keywordbarState);
        }}
      >
        <span>
          키워드로 찾기{"  "}
          {props.keywordbarState ? (
            <i className="fas fa-angle-up"></i>
          ) : (
            <i className="fas fa-angle-down"></i>
          )}
        </span>
      </div>
      <SelectedKeywordList
        selected_keyword={props.selectedKeywords}
        delete={props.deleteSelectedKeyword}
        init={props.initSelectedKeyword}
        state={props.keywordbarState}
      />
      <div
        className="mKeywordbar__container"
        style={props.keywordbarState ? flex_style : none_style}
      >
        <CategoryList
          name="category"
          header="카테고리"
          value={props.category}
          setSelectedCategory={props.setSelectedCategory}
          select={props.checkSelectedKeywords}
          isChecked={props.isIncludeSelectedCategory}
        />

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
    </div>
  );
}
