import React, { useState, useEffect } from "react";
import axios from "axios";
import Wata from "./component/wata/Wata";
import "./App.css";
import SearchBar from "./component/search/SearchBar";
import KeywordBar from "./component/search/KeywordBar";
import Header from "./component/header/Header";
import Mail from "./component/mail/Mailpopup";
import Pagination from "./component/pagination/Pagination";
import Footer from "./component/footer/Footer";
import Loader from "./component/loader/Loader";

function App() {
  const CURRENT_VERSION_WATAS = "watas2";
  const PAST_VIRSION_WATAS = "watas1";

  const BOOKMARK_LIST = "bookmarks";

  const [isBookmark, setIsBookmark] = useState(false);
  const [isMail, setIsMail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLander, setIsLander] = useState(false);

  const [watas, setWatas] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [allSearchResultLength, setAllSearchResultLength] = useState([]);
  const [allKeywords, setAllKeywords] = useState({
    category: [],
    genre: [],
    platform: [],
    keyword: [],
  });

  const [searchInput, setSearchInput] = useState("");

  const [searchKeywords, setsearchKeywords] = useState({
    category: [],
    genre: [],
    platform: [],
    keyword: [],
  });

  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    watasPerPage: 12,
    pageLimit: 2,
  });

  const openBookmark = () => {
    setIsBookmark(true);
    setSearchInput("");
    setsearchKeywords({
      category: [],
      genre: [],
      platform: [],
      keyword: [],
    });
    setPageInfo({
      ...pageInfo,
      currentPage: 1,
    });
  };

  const setMail = (isOpen) => {
    setIsMail(isOpen);
  };

  const searchSearchbar = (e) => {
    setSearchInput(e.target.value);
    setPageInfo({
      ...pageInfo,
      currentPage: 1,
      pageLimit: 2,
    });
  };

  const deleteItem = (arr, value) => {
    return arr.filter((v) => {
      if (v != value) return v;
    });
  };

  const searchKeywordbar = (type, action, value) => {
    setSearchInput("");
    setPageInfo({
      ...pageInfo,
      currentPage: 1,
      pageLimit: 2,
    });

    let d = [];

    if (type == "category") {
      d = searchKeywords.category;
    } else if (type == "genre") {
      d = searchKeywords.genre;
    } else if (type == "platform") {
      d = searchKeywords.platform;
    } else if (type == "keyword") {
      d = searchKeywords.keyword;
    } else if (type == "none") {
      d = [];
    }

    if (action == "add") {
      if (d.includes(value) != true) {
        setsearchKeywords({
          ...searchKeywords,
          [type]: [...d, value],
        });
      }
    } else if (action == "delete") {
      setsearchKeywords({
        ...searchKeywords,
        [type]: deleteItem(d, value),
      });
    } else if (action == "init") {
      setsearchKeywords({
        category: [],
        genre: [],
        platform: [],
        keyword: [],
      });
    }
  };

  const currentWatas = (tmp, first, last) => {
    let currentWatas = [];
    currentWatas = tmp.slice(first, last);
    return currentWatas;
  };

  const makePageNumbers = (totalWatas) => {
    let pageNumbers = [];

    let start = pageInfo.currentPage - pageInfo.pageLimit;
    let last = pageInfo.currentPage + pageInfo.pageLimit;

    if (last < pageInfo.pageLimit * 2 + 1) {
      last = pageInfo.pageLimit * 2 + 1;
      start = 1;
    }

    if (start < 1) start = 1;
    let max = Math.ceil(totalWatas / pageInfo.watasPerPage);
    if (last >= max) last = max;

    for (let i = start; i <= last; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const paginate = (currentPageNumber) => {
    setPageInfo({
      ...pageInfo,
      currentPage: currentPageNumber,
    });
  };

  const loadLocalStorage = (name) => {
    const loadedBookmarks = localStorage.getItem(name);

    if (loadedBookmarks !== null) {
      return JSON.parse(loadedBookmarks);
    } else {
      return [];
    }
  };

  const saveLocalstorage = (name, b) => {
    localStorage.setItem(name, JSON.stringify(b));
  };

  const addBookmark = (id) => {
    let lb = loadLocalStorage(BOOKMARK_LIST);

    if (!lb.includes(id)) {
      let b = [...lb, id];
      alert("북마크에 추가했습니다.");
      saveLocalstorage(b);
      setBookmarks(b);
    }
  };

  const deleteBookmark = (id) => {
    let lb = loadLocalStorage(BOOKMARK_LIST);
    let b = lb.filter((w) => {
      if (w != id) {
        return w;
      }
    });
    setBookmarks(b);
    saveLocalstorage(b);

    alert("북마크에서 삭제했습니다.");
  };

  const shareBookmark = (button) => {
    var sharename = "여성서사 추천리스트 공유하기";
    var sharetext = "여성서사 추천리스트";
    //var shareurl =window.location.host + "/main/sharebookmark" + "?id=" + this.load_bookmarks;

    var shareurl = "temp";
    var option =
      "width = 500, height = 500, top = 100, left = 200, location = no";
    var url = "";

    if (button == "twitter") {
      url =
        "https://twitter.com/intent/tweet?text=" +
        sharetext +
        "&url=" +
        shareurl;
    } else if (button == "facebook") {
      url = "http://www.facebook.com/sharer/sharer.php?u=" + shareurl;
    }

    window.open(url, sharename, option);
  };

  const dataFiltering = () => {
    //데이터 검색
    let result = [];
    let big_result = watas;

    if (isBookmark) {
      let r = [];
      watas.filter((c) => {
        loadLocalStorage(BOOKMARK_LIST).map((b) => {
          if (c.wata_id == b) {
            r.push(c);
          }
        });
      });

      big_result = r;
    }

    if (searchInput !== "") {
      result = big_result.filter((c) => {
        if (
          c.title.indexOf(searchInput) > -1 ||
          c.creator.indexOf(searchInput) > -1
        ) {
          return c;
        }
      });
    } else {
      if (
        searchKeywords.category.length == 0 &&
        searchKeywords.genre.length == 0 &&
        searchKeywords.platform.length == 0 &&
        searchKeywords.keyword.length == 0
      ) {
        result = big_result;
      } else {
        result = [[], [], [], []];

        //같은 카테고리 검색 시 합집합.
        searchKeywords.category.map((k) => {
          let r = big_result.filter((w) => {
            if (w.category == k) return w;
          });

          result[0] = result[0].concat(r);
        });

        searchKeywords.genre.map((k) => {
          let r = big_result.filter((w) => {
            if (w.genre == k) return w;
          });

          result[1] = result[1].concat(r);
        });

        searchKeywords.platform.map((k) => {
          let r = [];
          big_result.filter((w) => {
            w.platforms.map((p) => {
              if (p.name == k) {
                r.push(w);
              }
            });
          });
          result[2] = result[2].concat(r);
        });

        searchKeywords.keyword.map((k) => {
          let r = big_result.filter((w) => {
            if (w.keywords.includes(k)) return w;
          });

          result[3] = result[3].concat(r);
        });

        //reduce 가 길이 0인 배열 있으면 오류나서 길이 0인 배열 없애줌a
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

    const indexOfLast = pageInfo.currentPage * pageInfo.watasPerPage;
    const indexOfFirst = indexOfLast - pageInfo.watasPerPage;

    setAllSearchResultLength(result.length);
    setSearchResult(currentWatas(result, indexOfFirst, indexOfLast));
  };

  useEffect(() => {
    let isLoding = false;
    const current_version_watas = loadLocalStorage(CURRENT_VERSION_WATAS);

    async function get() {
      let axios_watas = [];

      if (
        typeof current_version_watas == "undefined" ||
        current_version_watas == null ||
        current_version_watas.length == 0
      ) {
        localStorage.removeItem(PAST_VIRSION_WATAS);
        const { data: result } = await axios.get(
          "http://warchive.pythonanywhere.com/api/?type=data"
        );

        axios_watas = result.wata_list;
      } else {
        axios_watas = current_version_watas;
      }

      if (
        typeof axios_watas != "undefined" &&
        axios_watas != null &&
        axios_watas.length != 0
      ) {
        let c = [];
        let g = [];
        let p = [];
        let k = [];

        axios_watas.map((v) => {
          c.push(v.category);
          g.push(v.genre);
          v.platforms.map((e) => {
            if (e.name != "") p.push(e.name);
          });
          v.keywords.map((e) => {
            if (e != "") k.push(e);
          });

          return 0;
        });

        setWatas(axios_watas);
        setAllKeywords({
          category: Array.from(new Set(c)),
          genre: Array.from(new Set(g)),
          platform: Array.from(new Set(p)),
          keyword: Array.from(new Set(k)),
        });
        setIsLoading(false);

        if (isLoding == false) {
          saveLocalstorage(CURRENT_VERSION_WATAS, axios_watas);
          setWatas(axios_watas);
        }
      }
    }

    get();

    return () => {
      isLoding = true;
      setIsLoading(false);
    };
  }, [isLander]);

  useEffect(() => {
    dataFiltering();
  }, [watas, searchKeywords, searchInput, pageInfo, isBookmark, bookmarks]);

  return (
    <div className="root_container">
      <Header
        open_bookmark={openBookmark}
        open_mail={setMail}
        isBookmark={isBookmark}
      />
      <Mail close_mail={setMail} open_mail_flag={isMail} />
      <section className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container__box">
            <div className="serachbar">
              <KeywordBar
                category={allKeywords.category}
                genre={allKeywords.genre}
                platform={allKeywords.platform}
                keyword={allKeywords.keyword}
                search_keywordbar={searchKeywordbar}
                isBookmark={isBookmark}
              />
              <SearchBar search_searchbar={searchSearchbar} />
            </div>

            {searchInput == "" &&
            searchKeywords.category.length == 0 &&
            searchKeywords.genre.length == 0 &&
            searchKeywords.platform.length == 0 &&
            searchKeywords.keyword.length == 0 ? (
              <div className="result_title"></div>
            ) : (
              <div className="result_title">
                검색 결과는 총 {allSearchResultLength} 개 입니다.
              </div>
            )}

            <div className="wata_list">
              {searchResult.map((w) => {
                if (w.isDelete != "Y") {
                  let bookmark = false;
                  //북마크인 것 노란 마크 하기 위해...
                  loadLocalStorage(BOOKMARK_LIST).map((i) => {
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
                      genre={w.genre}
                      keywords={w.keywords}
                      cautions={w.cautions}
                      platforms={w.platforms}
                      thumnail={w.thumnail}
                      bookmark={bookmark}
                      add_bookmark={addBookmark}
                      delete_bookmark={deleteBookmark}
                    />
                  );
                }
              })}
            </div>
          </div>
        )}

        <Pagination
          watasPerPage={pageInfo.watasPerPage}
          pageNumbers={makePageNumbers(allSearchResultLength)}
          paginate={paginate}
          currentPageNumber={pageInfo.currentPage}
        />

        {isBookmark ? (
          <div className="bookmark-share__container">
            <span className="bookmark_caution">
              인터넷 기록,쿠키 등을 삭제하시면 즐겨찾기 목록이 초기화됩니다.
            </span>
            <div className="share_button__container">
              <span className="share_label">리스트 공유하기</span>
              <div
                className="share_button"
                onClick={() => shareBookmark("twitter")}
              >
                <i className="fab fa-twitter"></i>
              </div>
              <div
                className="share_button facebook"
                onClick={() => shareBookmark("facebook")}
              >
                <i className="fab fa-facebook-f"></i>
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

export default App; //App 을 사용할 수 있도록 export 해줌.
