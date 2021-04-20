import React from "react";
import "./KeywordBar.css";

function SelectedBubble(props) {
  return (
    <div
      className="selected-keyword-list__bubble"
      onClick={() => {
        props.addSelectedBubble(props.name, "delete", props.value);
        props.delete(props.list, props.name, props.value);
      }}
    >
      {props.value}
    </div>
  );
}

function Bubble(props) {
  return (
    <div className="bubble-list__bubble">
      <input type="checkbox" name={props.name} value={props.value}></input>
      <label
        htmlFor={props.name}
        onClick={() => {
          props.addSelectedBubble(props.name, "add", props.value);
          props.select(props.name, props.value);
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
  };

  let flex_style = {
    height: "35px",
  };

  return (
    <div>
      <div
        className="keywordbar__selected-keyword-list"
        style={props.state ? flex_style : none_style}
      >
        {props.selected_keyword ? (
          props.selected_keyword.map((i) => {
            return (
              <SelectedBubble
                key={i.value}
                list={props.selected_keyword}
                name={i.name}
                value={i.value}
                addSelectedBubble={props.addSelectedBubble}
                delete={props.delete}
                state={props.state}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

function KeywordList(props) {
  return (
    <div className="keywordbar__keyword-box">
      <h3 className="keyword-box__header">{props.header}</h3>
      <div className="keyword-box__bubble-list">
        {props.value.map((i) => {
          return (
            <Bubble
              key={i}
              name={props.name}
              value={i}
              addSelectedBubble={props.addSelectedBubble}
              select={props.select}
            />
          );
        })}
      </div>
    </div>
  );
}

export default class KeywordBar extends React.Component {
  state = {
    keywordbar_state: false,
    selected_keyword: [],

    category: [],
    sub_category: [],
    genre: [],
    platform: [],
    keyword: [],

    bookmark: false,
  };

  constructor(props) {
    super(props);

    if (props.category) {
      this.state = {
        keywordbar_state: false,
        selected_keyword: [],
        category: props.category,
        sub_category: props.sub_category,
        genre: props.genre,
        platform: props.platform,
        keyword: props.keyword,

        bookmark: false,
      };
    } else {
      this.state = {
        keywordbar_state: false,
        selected_keyword: [],
        category: [],
        sub_category: [],
        genre: [],
        platform: [],
        keyword: [],

        bookmark: false,
      };
    }

    this.select = this.select.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(arr, name, value) {
    let r = arr.filter((v) => {
      if (!(v.name == name && v.value == value)) return v;
    });

    this.setState({ selected_keyword: r });
  }

  select(name, value) {
    this.setState({
      selected_keyword: [
        ...this.state.selected_keyword,
        { name: name, value: value },
      ],
    });
  }

  init() {
    this.setState({
      keywordbar_state: false,
      selected_keyword: [],
      bookmark: true,
    });
  }

  render() {
    let none_style = {
      height: "0px",
    };

    let flex_style = {
      height: "400px",
    };

    let no_style = {
      padding: "0px",
    };

    let pa_style = {
      padding: "5px",
    };

    const {
      keywordbar_state,
      category,
      sub_category,
      genre,
      platform,
      keyword,
      selected_keyword,
    } = this.state;

    if (this.props.isBookmark && !this.state.bookmark) {
      this.init();
    }

    return (
      <div className="keywordbar">
        <div
          className="keywordbar__selected-bubble-box"
          style={keywordbar_state ? pa_style : no_style}
        >
          <SelectedKeywordList
            selected_keyword={selected_keyword}
            addSelectedBubble={this.props.search_keywordbar}
            delete={this.delete}
            state={keywordbar_state}
          />
        </div>
        <div
          className="keywordbar__container"
          style={keywordbar_state ? flex_style : none_style}
        >
          <KeywordList
            name="category"
            header="카테고리"
            value={category}
            addSelectedBubble={this.props.search_keywordbar}
            select={this.select}
          />
          <KeywordList
            name="sub_category"
            header="서브카테고리"
            value={sub_category}
            addSelectedBubble={this.props.search_keywordbar}
            select={this.select}
          />
          <KeywordList
            name="genre"
            header="장르"
            value={genre}
            addSelectedBubble={this.props.search_keywordbar}
            select={this.select}
          />
          <KeywordList
            name="platform"
            header="플랫폼"
            value={platform}
            addSelectedBubble={this.props.search_keywordbar}
            select={this.select}
          />
          <KeywordList
            name="keyword"
            header="키워드"
            value={keyword}
            addSelectedBubble={this.props.search_keywordbar}
            select={this.select}
          />
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
