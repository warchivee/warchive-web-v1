//라이브러리
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useMediaQuery } from "react-responsive";

//pc 컴포넌트
import Wata from "./component/wata/Wata";
import Header from "./component/header/Header";
import Mail from "./component/mail/Mailpopup";
import Loader from "./component/loader/Loader";
import SearchBar from "./component/search/SearchBar";
import KeywordBar from "./component/search/KeywordBar";
import Pagination from "./component/pagination/Pagination";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";

//mobile 컴포넌트
import MoHeader from "./m-compenent/MoHeader";
import MoMenu from "./m-compenent/MoMenu";
import MoWata from "./m-compenent/MoWata";
import MoKeywordbar from "./m-compenent/MoKeywordbar";

//css
import "./App.css";

function App() {
  //==================== variable ====================

  //local storage name
  const PAST_VIRSION_WATAS = "watas5";
  const CURRENT_VERSION_WATAS = "watas6";


  const NEW_BOOKMARK_LIST = "newBookmarks";


  //state - wata
  const [watas, setWatas] = useState([]);

  //state - bookmark
  const [isBookmark, setIsBookmark] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  //state - searchbar
  const [searchInput, setSearchInput] = useState("");

  //state - keywordbar
  const [keywordbarState, setKeywordbarState] = useState(false);
  const [searchKeywords, setsearchKeywords] = useState({
    category: [],
    genre: [],
    platform: [],
    keyword: [],
  });
  const [selectedKeywords, setSelectedKeywordsState] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  //state - search
  const [allKeywords, setAllKeywords] = useState({
    category: [],
    genre: [],
    platform: [],
    keyword: [],
  });
  const [searchResult, setSearchResult] = useState([]);
  const [allSearchResultLength, setAllSearchResultLength] = useState([]);

  //state - ui 조정
  const [overlayInfo, setOverlayInfo] = useState({ id: "", state: false });
  const [isMenu, setIsMenu] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLander, setIsLander] = useState(false);
  const [firstStart, setFirstStart] = useState(true);

  //state - pagination
  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    watasPerPage: 12,
    pageLimit: 2,
  });

  //==================== module ====================

  const sortBy = (field) => {
    return function (a, b) {
      return hangulFirstCompare(a[field], b[field]);
    };
  };

  const hangulFirstCompare = (a, b) => {
    function addOrderPrefix(s) {
      var code = s.toLowerCase().charCodeAt(0);
      var prefix;

      // 한글 AC00—D7AF
      if (0xac00 <= code && code <= 0xd7af) prefix = "1";
      // 한글 자모 3130—318F
      else if (0x3130 <= code && code <= 0x318f) prefix = "2";
      // 영어 소문자 0061-007A
      else if (0x61 <= code && code <= 0x7a) prefix = "3";
      // 그외
      else prefix = "9";

      return prefix + s;
    }

    a = addOrderPrefix(a);
    b = addOrderPrefix(b);

    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }

    return 0;
  };

  const loadLocalStorage = (name) => {
    const loadData = localStorage.getItem(name);

    if (loadData !== null) {
      return JSON.parse(loadData);
    } else {
      return [];
    }
  };

  const saveLocalstorage = (name, b) => {
    localStorage.setItem(name, JSON.stringify(b));
  };

  const deleteItem = (arr, value) => {
    return arr.filter((v) => {
      if (v != value) return v;
    });
  };

  const openEmailForm =  () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfvn7m8JTfXCt57EkJLkXo66a6FB2ra0hzN9PE4CyVNZcuzHg/viewform',
      '_blank',
    );
  };

  //==================== handler method ====================

  //searchbar
  const searchSearchbar = (e) => {
    setSearchInput(e.target.value);
    setPageInfo({
      ...pageInfo,
      currentPage: 1,
      pageLimit: 2,
    });
  };

  //keywordbar
  const setSelectedKeywords = (v) => {
    setSelectedKeywordsState(v);
  };

  const initSelectedKeyword = () => {
    setSelectedKeywords([]);
    searchKeywordbar("none", "init", 0);
  };

  const addSelectedKeyword = (keyword) => {
    if (!isIncludeSelectedKeyword(keyword.name)) {
      if (keyword.name == "category") {
        searchKeywordbar("category", "category", keyword.value);
      } else {
        setSelectedKeywords([...selectedKeywords, keyword]);
        searchKeywordbar(keyword.name, "add", keyword.value);
      }
    }
  };

  const deleteSelectedKeyword = (keyword) => {
    if (isIncludeSelectedKeyword(keyword)) {
      let d = selectedKeywords.filter((e) => {
        if (!(e.name == keyword.name && e.value == keyword.value)) return e;
      });

      setSelectedKeywords(d);
      searchKeywordbar(keyword.name, "delete", keyword.value);
    }
  };

  const checkSelectedKeywords = (keyword) => {
    if (isIncludeSelectedKeyword(keyword)) {
      deleteSelectedKeyword(keyword);
    } else {
      addSelectedKeyword(keyword);
    }
  };

  const isIncludeSelectedCategory = (v) => {
    if (selectedCategory == v) {
      return true;
    } else {
      return false;
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

    if (action == "category") {
      if (value == "전체") {
        setsearchKeywords({
          genre: [],
          platform: [],
          keyword: [],
          [type]: ["게임", "만화", "서적", "영상"],
        });
      } else {
        setsearchKeywords({
          genre: [],
          platform: [],
          keyword: [],
          [type]: [value],
        });
      }

      setSelectedKeywords([]);
    } else if (action == "add") {
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
        ...searchKeywords,
        genre: [],
        platform: [],
        keyword: [],
      });
    }
  };

  //bookmark
  const openBookmark = (value) => {
    console.log(value);
    setIsBookmark(value);
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
    setSelectedCategory("전체");
  };

  const addBookmark = (id) => {
    let lb = loadLocalStorage(NEW_BOOKMARK_LIST);

    if (!lb.includes(id)) {
      let b = [...lb, id];
      alert("북마크에 추가했습니다.");
      saveLocalstorage(NEW_BOOKMARK_LIST, b);
      setBookmarks(b);
    }
  };

  const deleteBookmark = (id) => {
    let lb = loadLocalStorage(NEW_BOOKMARK_LIST);
    let b = lb.filter((w) => {
      if (w != id) {
        return w;
      }
    });
    saveLocalstorage(NEW_BOOKMARK_LIST, b);
    setBookmarks(b);

    alert("북마크에서 삭제했습니다.");
  };

  //main
  const dataFiltering = () => {
    //데이터 검색
    let result = [];
    let big_result = watas;

    if (isBookmark) {
      let r = [];
      watas.filter((c) => {
        loadLocalStorage(NEW_BOOKMARK_LIST).map((b) => {
          if (c.id == b) {
            r.push(c);
          }
        });
      });

      big_result = r;
    }

    if (searchInput !== "") {
      result = big_result.filter((c) => {
        if (
          c.title
            .toLowerCase()
            .replace(/\s/g, "")
            .indexOf(searchInput.toLowerCase().replace(/\s/g, "")) > -1 ||
          c.creator
            .toLowerCase()
            .replace(/\s/g, "")
            .indexOf(searchInput.toLowerCase().replace(/\s/g, "")) > -1
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
            if (w.category.replace(/\s/g, "") == k.replace(/\s/g, "")) return w;
          });

          result[0] = result[0].concat(r);
        });

        searchKeywords.genre.map((k) => {
          let r = big_result.filter((w) => {
            if (w.genre.replace(/\s/g, "") == k.replace(/\s/g, "")) {
              return w;
            }
          });

          result[1] = result[1].concat(r);
        });

        searchKeywords.platform.map((k) => {
          let r = [];
          big_result.filter((w) => {
            w.platforms.map((p) => {
              if (p.name.replace(/\s/g, "") == k.replace(/\s/g, "")) {
                r.push(w);
              }
            });
          });
          result[2] = result[2].concat(r);
        });

        searchKeywords.keyword.map((k) => {
          let r = [];
          big_result.filter((w) => {
            w.keywords.map((s) => {
              if (s.replace(/\s/g, "") == k.replace(/\s/g, "")) {
                r.push(w);
              }
            });
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

    result = Array.from(new Set(result)).sort(sortBy("title"));

    const indexOfLast = pageInfo.currentPage * pageInfo.watasPerPage;
    const indexOfFirst = indexOfLast - pageInfo.watasPerPage;

    setAllSearchResultLength(result.length);
    setSearchResult(currentWatas(result, indexOfFirst, indexOfLast));
  };

  const categorizing = (allWatas) => {
    let c = [];
    let g = [];
    let p = [];
    let k = [];

    if (allWatas) {
      allWatas.map((v) => {
        if (selectedCategory == "전체") {
          c.push(v.category.replace(/\s/g, ""));
          g.push(v.genre.replace(/\s/g, ""));
          v.platforms.map((e) => {
            if (e.name != "") p.push(e.name.replace(/\s/g, ""));
          });
          v.keywords.map((e) => {
            if (e != "") k.push(e.replace(/\s/g, ""));
          });
        } else {
          c.push(v.category);
          if (selectedCategory == v.category) {
            g.push(v.genre.replace(/\s/g, ""));
            v.platforms.map((e) => {
              if (e.name != "") p.push(e.name.replace(/\s/g, ""));
            });
            v.keywords.map((e) => {
              if (e != "") k.push(e.replace(/\s/g, ""));
            });
          }
        }

        return 0;
      });
    }

    setAllKeywords({
      category: [
        ...["전체"],
        ...Array.from(new Set(c)).sort(hangulFirstCompare),
      ],
      genre: Array.from(new Set(g)).sort(hangulFirstCompare),
      platform: Array.from(new Set(p)).sort(hangulFirstCompare),
      keyword: Array.from(new Set(k)).sort(hangulFirstCompare),
    });
  };

  //pagination
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

  //==================== useEffect ====================

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
        setWatas(axios_watas);
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
    categorizing(watas);
  }, [selectedCategory, watas]);

  useEffect(() => {
    dataFiltering();
  }, [
    watas,
    searchKeywords,
    searchInput,
    pageInfo,
    isBookmark,
    bookmarks,
    selectedCategory,
  ]);

  //==================== return ====================

  return useMediaQuery({ minWidth: 600 }) ? (
    <div className="root_container">
      <Header
        open_bookmark={openBookmark}
        open_mail={openEmailForm}
        isBookmark={isBookmark}
        isAbout={isAbout}
        setIsAbout={setIsAbout}
      />

      <section className="container">
        {isAbout ? (
          <About isPc={true} />
        ) : (
          <>
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
                    isBookmark={isBookmark}
                    initSelectedKeyword={initSelectedKeyword}
                    addSelectedKeyword={addSelectedKeyword}
                    deleteSelectedKeyword={deleteSelectedKeyword}
                    checkSelectedKeywords={checkSelectedKeywords}
                    isIncludeSelectedKeyword={isIncludeSelectedKeyword}
                    setSelectedKeywords={setSelectedKeywords}
                    setFirstStart={setFirstStart}
                    setKeywordbarState={setKeywordbarState}
                    selectedCategory={selectedCategory}
                    keywordbarState={keywordbarState}
                    selectedKeywords={selectedKeywords}
                    firstStart={firstStart}
                    setSelectedCategory={setSelectedCategory}
                    isIncludeSelectedCategory={isIncludeSelectedCategory}
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
                      loadLocalStorage(NEW_BOOKMARK_LIST).map((i) => {
                        if (w.id == i) {
                          bookmark = true;
                        }
                      });

                      return (
                        <Wata
                          key={w.id}
                          wata_id={w.id}
                          title={w.title}
                          creator={w.creator}
                          category={w.category}
                          genre={w.genre}
                          keywords={w.keywords.sort(hangulFirstCompare)}
                          cautions={w.cautions}
                          platforms={w.platforms.sort(sortBy("name"))}
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
              searchResultLength={allSearchResultLength}
              pageNumbers={makePageNumbers(allSearchResultLength)}
              paginate={paginate}
              currentPageNumber={pageInfo.currentPage}
            />

            {isBookmark ? (
              <div className="bookmark-share__container">
                <span className="bookmark_caution">
                  인터넷 기록,쿠키 등을 삭제하시면 즐겨찾기 목록이 초기화됩니다.
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </>
        )}
      </section>
      <Footer />
    </div>
  ) : (
    <div className="mRoot__container">
      <MoHeader
        setIsMenu={setIsMenu}
        open_bookmark={openBookmark}
        isBookmark={isBookmark}
        search_searchbar={searchSearchbar}
      />
      <MoMenu
        isMenu={isMenu}
        setIsMenu={setIsMenu}
        open_mail={openEmailForm}
        open_bookmark={openBookmark}
        setIsAbout={setIsAbout}
        isAbout={isAbout}
      />

      <section className="mContainer">
        {isAbout ? (
          <About isPc={false} />
        ) : (
          <>
            <KeywordBar
              category={allKeywords.category}
              genre={allKeywords.genre}
              platform={allKeywords.platform}
              keyword={allKeywords.keyword}
              isBookmark={isBookmark}
              initSelectedKeyword={initSelectedKeyword}
              addSelectedKeyword={addSelectedKeyword}
              deleteSelectedKeyword={deleteSelectedKeyword}
              checkSelectedKeywords={checkSelectedKeywords}
              isIncludeSelectedKeyword={isIncludeSelectedKeyword}
              setSelectedKeywords={setSelectedKeywords}
              setFirstStart={setFirstStart}
              setKeywordbarState={setKeywordbarState}
              selectedCategory={selectedCategory}
              keywordbarState={keywordbarState}
              selectedKeywords={selectedKeywords}
              firstStart={firstStart}
              setSelectedCategory={setSelectedCategory}
              isIncludeSelectedCategory={isIncludeSelectedCategory}
            />
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

            <div className="mWata_list">
              {searchResult.map((w) => {
                if (w.isDelete != "Y") {
                  let bookmark = false;
                  //북마크인 것 노란 마크 하기 위해...
                  loadLocalStorage(NEW_BOOKMARK_LIST).map((i) => {
                    if (w.id == i) {
                      bookmark = true;
                    }
                  });

                  return (
                    <MoWata
                      key={w.id}
                      wata_id={w.id}
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
                      overlay={
                        overlayInfo.id == w.id ? overlayInfo.state : false
                      }
                      setOverlayInfo={setOverlayInfo}
                    />
                  );
                }
              })}
            </div>
            <Pagination
              watasPerPage={pageInfo.watasPerPage}
              pageNumbers={makePageNumbers(allSearchResultLength)}
              paginate={paginate}
              currentPageNumber={pageInfo.currentPage}
              searchResultLength={allSearchResultLength}
            />
          </>
        )}
      </section>

      {isBookmark ? (
        <div className="bookmark-share__container">
          <span className="bookmark_caution">
            인터넷 기록,쿠키 등을 삭제하시면 즐겨찾기 목록이 초기화됩니다.
          </span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App; //App 을 사용할 수 있도록 export 해줌.
