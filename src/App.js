import React from "react";
import axios from "axios"; //비동기통신 fetch 대신 axios 사용. yarn add axios
import Wata from "./component/wata/Wata";
import "./App.css";
import SearchBar from "./component/search/SearchBar";
import KeywordBar from "./component/search/KeywordBar";
import Header from "./component/header/Header";
import Mail from "./component/mail/Mail";
import Pagination from "./component/pagination/Pagination";
import Footer from "./component/footer/Footer";
import Loader from "./component/loader/Loader";

class App extends React.Component {
  state = {
    isBookmark: false,
    isMail: false,
    isLoading: true,
    wata_list: [],
    keyword_list: [], //전체 키워드 리스트

    searchKeyword: "", //검색 입력
    selected_categorys: [], //선택한 카테고리
    selected_sub_categorys: [], //선택한 중분류
    selected_genres: [], //선택한 장르
    selected_platforms: [], //선택한 플랫폼
    selected_keywords: [], //선택한 키워드

    currentPage: 1,
    watasPerPage: 12,
    pageLimit: 3,

    first_start: false,

    temp: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      isBookmark: false,
      isMail: false,
      isLoading: true,
      wata_list: [],
      keyword_list: [],

      searchKeyword: "",
      selected_categorys: [],
      selected_sub_categorys: [],
      selected_genres: [],
      selected_platforms: [],
      selected_keywords: [],

      currentPage: 1,
      watasPerPage: 12,
      pageLimit: 3,

      first_start: false,
    };

    this.search_keywordbar = this.search_keywordbar.bind(this);
    this.search_searchbar = this.search_searchbar.bind(this);
    this.open_bookmark = this.open_bookmark.bind(this);
    this.open_mail = this.open_mail.bind(this);
    this.close_mail = this.close_mail.bind(this);
    this.paginate = this.paginate.bind(this);
    this.delete_bookmark = this.delete_bookmark.bind(this);
    this.add_bookmark = this.add_bookmark.bind(this);
  }

  open_bookmark() {
    this.setState({
      isBookmark: true,
      isMail: false,
      searchKeyword: "",
      selected_categorys: [],
      selected_sub_categorys: [],
      selected_genres: [],
      selected_platforms: [],
      selected_keywords: [],
      currentPage: 1,
    });
  }

  open_mail() {
    this.setState({
      isMail: true,
    });
  }

  close_mail() {
    this.setState({
      isMail: false,
    });

    console.log("close");
  }

  // SearchBar 에 props로 넘겨줄 handleChange 메소드 정의
  search_searchbar = (e) => {
    this.setState({
      searchKeyword: e.target.value,
      currentPage: 1,
      pageStart: 1,
      pageEnd: 5,
      pageLimit: 5,
    });
  };

  delete(arr, value) {
    return arr.filter((v) => {
      if (v != value) return v;
    });
  }

  search_keywordbar(type, action, value) {
    this.setState({
      searchKeyword: "",
      currentPage: 1,
      pageStart: 1,
      pageEnd: 5,
      pageLimit: 5,
    });

    const name = "selected_" + type + "s";
    let d = [];

    if (type == "category") {
      d = this.state.selected_categorys;
    } else if (type == "sub_category") {
      d = this.state.selected_sub_categorys;
    } else if (type == "genre") {
      d = this.state.selected_genres;
    } else if (type == "platform") {
      d = this.state.selected_platforms;
    } else if (type == "keyword") {
      d = this.state.selected_keywords;
    }

    if (action == "add") {
      if (!d.includes(value)) {
        this.setState({
          [name]: [...d, value],
        });
      }
    } else {
      this.setState({
        [name]: this.delete(d, value),
      });
    }
  }

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

  currentWatas(tmp, first, last) {
    let currentWatas = [];
    currentWatas = tmp.slice(first, last);

    return currentWatas;
  }

  makePageNumbers(totalWatas) {
    let pageNumbers = [];

    let start = this.state.currentPage - this.state.pageLimit;
    let last = this.state.currentPage + this.state.pageLimit;

    if (last < this.state.pageLimit * 2 + 1) {
      last = this.state.pageLimit * 2 + 1;
      start = 1;
    }

    if (start < 1) start = 1;
    let max = Math.ceil(totalWatas / this.state.watasPerPage);
    if (last >= max) last = max;

    for (let i = start; i <= last; i++) {
      pageNumbers.push(i);
    }

    console.log(start + "////" + last);
    console.log(pageNumbers);

    return pageNumbers;
  }

  paginate(currentPageNumber) {
    this.setState({
      currentPage: currentPageNumber,
    });
  }

  load_bookmarks() {
    const loadedBookmarks = localStorage.getItem("bookmarks");

    if (loadedBookmarks !== null) {
      return JSON.parse(loadedBookmarks);
    } else {
      return [];
    }
  }

  save_localstorage(b) {
    localStorage.setItem("bookmarks", JSON.stringify(b));
  }

  add_bookmark(id) {
    /*
    this.setState({
      bookmark_list: [...this.state.bookmark_list, id],
    });
    */

    let lb = this.load_bookmarks();
    let b = [...lb, id];

    this.save_localstorage(b);
    this.setState({ temp: 1 });

    alert("북마크에 추가했습니다.");
  }

  delete_bookmark(id) {
    let lb = this.load_bookmarks();
    console.log("gelete" + id);
    console.log(lb);
    let b = lb.filter((w) => {
      if (w != id) {
        return w;
      }
    });

    console.log(b);

    this.save_localstorage(b);
    this.setState({ temp: 2 });

    alert("북마크에서 삭제했습니다.");
  }

  componentDidMount() {
    this.getWataList();
  }

  render() {
    const { isLoading, wata_list, keyword_list } = this.state;
    //데이터 검색
    let result = [];
    let big_result = wata_list;

    if (this.state.isBookmark) {
      let r = [];
      this.state.wata_list.filter((c) => {
        this.load_bookmarks().map((b) => {
          if (c.wata_id == b) {
            r.push(c);
          }
        });
      });

      big_result = r;
    }

    if (this.state.searchKeyword !== "") {
      result = big_result.filter((c) => {
        if (
          c.title.indexOf(this.state.searchKeyword) > -1 ||
          c.creator.indexOf(this.state.searchKeyword) > -1
        ) {
          return c;
        }
      });
    } else {
      if (
        this.state.selected_categorys.length == 0 &&
        this.state.selected_sub_categorys.length == 0 &&
        this.state.selected_genres.length == 0 &&
        this.state.selected_platforms.length == 0 &&
        this.state.selected_keywords.length == 0
      ) {
        result = big_result;
      } else {
        result = [[], [], [], [], []];

        //같은 카테고리 검색 시 합집합.
        this.state.selected_categorys.map((k) => {
          let r = big_result.filter((w) => {
            if (w.category == k) return w;
          });

          result[0] = result[0].concat(r);
        });

        this.state.selected_sub_categorys.map((k) => {
          let r = big_result.filter((w) => {
            if (w.sub_category == k) return w;
          });

          result[1] = result[1].concat(r);
        });

        this.state.selected_genres.map((k) => {
          let r = big_result.filter((w) => {
            if (w.genre == k) return w;
          });

          result[2] = result[2].concat(r);
        });

        this.state.selected_platforms.map((k) => {
          let r = [];
          big_result.filter((w) => {
            w.platforms.map((p) => {
              if (p.name == k) {
                r.push(w);
              }
            });
          });
          result[3] = result[3].concat(r);
        });

        this.state.selected_keywords.map((k) => {
          let r = big_result.filter((w) => {
            if (w.keywords.includes(k)) return w;
          });

          result[4] = result[4].concat(r);
        });

        //reduce 가 길이 0인 배열 있으면 오류나서 길이 0인 배열 없애줌
        result = result.filter((r) => {
          if (r.length > 0) return r;
        });

        //다른 카테고리들은 교집합
        if (!result.length == 0) {
          result = result.reduce((a, arr) =>
            a.filter((item) => arr.includes(item))
          );
        }
      }
    }

    console.log("search_keyword: ");
    console.log(this.state.searchKeyword);
    console.log(this.state.selected_categorys);
    console.log(this.state.selected_sub_categorys);
    console.log(this.state.selected_genres);
    console.log(this.state.selected_platforms);
    console.log(this.state.selected_keywords);

    const indexOfLast = this.state.currentPage * this.state.watasPerPage;
    const indexOfFirst = indexOfLast - this.state.watasPerPage;

    let resultLength = result.length;
    result = this.currentWatas(result, indexOfFirst, indexOfLast);

    console.log(
      indexOfFirst +
        "," +
        indexOfLast +
        "," +
        resultLength +
        "," +
        this.makePageNumbers(resultLength)
    );

    return (
      <div className="root_container">
        <Header
          open_bookmark={this.open_bookmark}
          open_mail={this.open_mail}
          isBookmark={this.state.isBookmark}
        />
        <Mail close_mail={this.close_mail} open_mail_flag={this.state.isMail} />
        <section className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="container__box">
              <div className="serachbar">
                <KeywordBar
                  category={keyword_list.category}
                  sub_category={keyword_list.sub_category}
                  genre={keyword_list.genre}
                  platform={keyword_list.platform}
                  keyword={keyword_list.keyword}
                  search_keywordbar={this.search_keywordbar}
                  isBookmark={this.state.isBookmark}
                />
                <SearchBar search_searchbar={this.search_searchbar} />
              </div>

              <div className="result_title">
                검색 결과는 총 {resultLength} 개 입니다.
              </div>

              <div className="wata_list">
                {result.map((w) => {
                  if (w.isDelete != "Y") {
                    let bookmark = false;
                    this.load_bookmarks().map((i) => {
                      if (w.wata_id == i) {
                        bookmark = true;
                      }
                    });

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
                        bookmark={bookmark}
                        add_bookmark={this.add_bookmark}
                        delete_bookmark={this.delete_bookmark}
                      />
                    );
                  }
                })}
              </div>
            </div>
          )}

          <Pagination
            watasPerPage={this.state.watasPerPage}
            pageNumbers={this.makePageNumbers(resultLength)}
            paginate={this.paginate}
            currentPageNumber={this.state.currentPage}
          />

          {this.state.isBookmark ? (
            <div className="bookmark-share__container">
              <span class="bookmark_caution">
                인터넷 기록,쿠키 등을 삭제하시면 즐겨찾기 목록이 초기화됩니다.
              </span>
              <div class="share_button__container">
                <span class="share_label">리스트 공유하기</span>
                <div class="share_button twitter">
                  <i class="fab fa-twitter"></i>
                </div>
                <div class="share_button facebook">
                  <i class="fab fa-facebook-f"></i>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App; //App 을 사용할 수 있도록 export 해줌.
