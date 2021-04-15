import React from "react";
import axios from "axios"; //비동기통신 fetch 대신 axios 사용. yarn add axios
import Wata from "./component/Wata";
import "./App.css";
import SearchBar from "./SearchBar.js";
import KeywordBar from "./component/KeywordBar";

class App extends React.Component {
  state = {
    isLoading: true,
    wata_list: [],
    keyword_list: [], //전체 키워드 리스트

    searchKeyword: "", //검색 입력
    selected_categorys: [], //선택한 카테고리
    selected_sub_categorys: [], //선택한 중분류
    selected_genres: [], //선택한 장르
    selected_platforms: [], //선택한 플랫폼
    selected_keywords: [], //선택한 키워드
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      wata_list: [],
      keyword_list: [],

      searchKeyword: "",
      selected_categorys: [],
      selected_sub_categorys: [],
      selected_genres: [],
      selected_platforms: [],
      selected_keywords: [],
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    //this.handleValueChange2 = this.handleValueChange2.bind(this);
  }

  /*
  // KeywordBar 에 props로 넘겨줄 handleChange 메소드 정의
  handleValueChange2 = (type, value, action) => {
    if (type == "category") {
      if (action == "add") {
        this.setState({
          category: this.state.category(value),
        });
      } else if (action == "delete") {
        this.setState({
          category: this.state.category.filter((v) => v !== value),
        });
      }
    } else if (type == "sub_category") {
      if (action == "add") {
        this.setState({
          sub_category: this.state.sub_category(value),
        });
      } else if (action == "delete") {
        this.setState({
          sub_category: this.state.sub_category.filter((v) => v !== value),
        });
      }
    } else if (type == "genre") {
      if (action == "add") {
        this.setState({
          genre: this.state.genre(value),
        });
      } else if (action == "delete") {
        this.setState({
          genre: this.state.genre.filter((v) => v !== value),
        });
      }
    } else if (type == "platform") {
      if (action == "add") {
        this.setState({
          platform: this.state.platform(value),
        });
      } else if (action == "delete") {
        this.setState({
          platform: this.state.platform.filter((v) => v !== value),
        });
      }
    }
  };
  */

  // SearchBar 에 props로 넘겨줄 handleChange 메소드 정의
  handleValueChange = (e) => {
    this.setState({
      searchKeyword: e.target.value,
      selected_categorys: [],
      selected_sub_categorys: [],
      selected_genres: [],
      selected_platforms: [],
      selected_keywords: [],
    });
  };

  getWataList = async () => {
    const {
      data: { wata_list },
    } = await axios.get("http://warchive.pythonanywhere.com/api/?type=data");

    let c = [];
    let s = [];
    let g = [];
    let p = [];
    let k = [];
    wata_list.map((v) => {
      c.push(v.category);
      s.push(v.sub_category);
      g.push(v.genre);
      v.platforms.map((e) => {
        if (e.name != "") p.push(e.name);
      });
      v.keywords.map((e) => {
        if (e != "") k.push(e);
      });

      return 0;
    });

    this.setState({
      wata_list,
      keyword_list: {
        category: Array.from(new Set(c)),
        sub_category: Array.from(new Set(s)),
        genre: Array.from(new Set(g)),
        platform: Array.from(new Set(p)),
        keyword: Array.from(new Set(k)),
      },
      isLoading: false,
    }); //wata_list(state) : wata_list(axios) 축약 표현
  };

  componentDidMount() {
    this.getWataList();
  }

  render() {
    const { isLoading, wata_list, keyword_list } = this.state; //es6. this.state.isLoading 이라고 해야하는데 축약하게 해줌.

    let wata_result = wata_list.filter((c) => {
      if (
        c.title.indexOf(this.state.searchKeyword) > -1 ||
        c.creator.indexOf(this.state.searchKeyword) > -1
      ) {
        return c;
      }
    });

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="container__box">
            <KeywordBar
              category={keyword_list.category}
              sub_category={keyword_list.sub_category}
              genre={keyword_list.genre}
              platform={keyword_list.platform}
              keyword={keyword_list.keyword}
            />
            <SearchBar handleValueChange={this.handleValueChange} />
            <div className="wata_list">
              {wata_result.map((w) => {
                if (w.isDelete != "Y") {
                  return (
                    <Wata
                      key={w.wata_id}
                      wata_id={w.wata_id}
                      title={w.title}
                      creator={w.creator}
                      category={w.category}
                      sub_category={w.sub_category}
                      genre={w.genre}
                      keywords={w.keywords}
                      cautions={w.cautions}
                      platforms={w.platforms}
                      thumnail={w.thumnail}
                    />
                  );
                }
              })}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default App; //App 을 사용할 수 있도록 export 해줌.
