import { nominalTypeHack } from "prop-types";
import React from "react";
import "./KeywordBar.css";

function SelectedKeyword(props) {
  return (
    <div>
      <button>
        <span>{props.select_keyword}</span>
      </button>
    </div>
  );
}

function Bubble(props) {
  return (
    <div className="bubble-list__bubble">
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        onChange={props.handleValueChange2}
        onClick={props.addSelectedBubble}
      ></input>
      <label for={props.name}>{props.value}</label>
    </div>
  );
}

function KeywordList(props) {
  return (
    <div className="keywordbar__keyword-box">
      <h3 className="keyword-box__header">{props.header}</h3>
      <div className="keyword-box__bubble-list">
        {props.value.map((i) => {
          return <Bubble name={props.name} value={i} />;
        })}
      </div>
    </div>
  );
}

export default class KeywordBar extends React.Component {
  state = {
    keywordbar_state: false,

    category: [],
    sub_category: [],
    genre: [],
    platform: [],
    keyword: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      keywordbar_state: false,
    };

    console.log(this.props);

    if (props.category) {
      this.state = {
        category: props.category,
        sub_category: props.sub_category,
        genre: props.genre,
        platform: props.platform,
        keyword: props.keyword,
      };
    }
  }

  addSelectedBubble(e) {
    this.setState({});
  }

  render() {
    let none_style = {
      height: "0px",
    };

    let flex_style = {
      height: "200px",
    };

    const {
      keywordbar_state,
      category,
      sub_category,
      genre,
      platform,
      keyword,
    } = this.state;

    return (
      <div className="keywordbar">
        <div className="keywordbar__selected-bubble"></div>
        <div
          className="keywordbar__container"
          style={keywordbar_state ? flex_style : none_style}
        >
          <KeywordList name="category" header="카테고리" value={category} />
          <KeywordList
            name="sub_category"
            header="서브카테고리"
            value={sub_category}
          />
          <KeywordList name="genre" header="장르" value={genre} />
          <KeywordList name="platform" header="플랫폼" value={platform} />
          <KeywordList name="keyword" header="키워드" value={keyword} />
        </div>
        <div
          className="keywordbar__button"
          onClick={() => {
            this.setState({ keywordbar_state: !keywordbar_state });
          }}
        >
          <span className="button__text">키워드로 찾기</span>
        </div>
      </div>
    );
  }
}
