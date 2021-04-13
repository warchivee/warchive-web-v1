import React from "react";
import axios from "axios"; //비동기통신 fetch 대신 axios 사용. yarn add axios
import Wata from "./Wata";
import "./App.css";
import SearchBar from "./SearchBar.js";
import KeywordBar from "./KeywordBar.js";

class App extends React.Component {
  state = {
    isLoading: true,
    wata_list: [],
    searchKeyword: "",
    category: [],
    sub_category: [],
    genre: [],
    platform: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      wata_list: [],
      searchKeyword: "",
      category: [],
      sub_category: [],
      genre: [],
      platform: [],
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleValueChange2 = this.handleValueChange2.bind(this);
  }

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

  // SearchBar 에 props로 넘겨줄 handleChange 메소드 정의
  handleValueChange = (e) => {
    this.setState({
      searchKeyword: e.target.value,
      category: [],
      sub_category: [],
      genre: [],
      platform: [],
    });
  };

  getWataList = async () => {
    const {
      data: { wata_list },
    } = await axios.get("http://warchive.pythonanywhere.com/api/");
    this.setState({ wata_list, isLoading: false }); //wata_list(state) : wata_list(axios) 축약 표현
    console.log(wata_list);
  };

  componentDidMount() {
    this.getWataList();
  }

  render() {
    const { isLoading, wata_list } = this.state; //es6. this.state.isLoading 이라고 해야하는데 축약하게 해줌.

    let wata_result = [];

    wata_result.concat.wata_list.filter((w) => {
      return w.title.indexOf(this.state.searchKeyword) > -1;
    });

    this.state.category.map((c) => {
      wata_result.concat.wata.filter((v) => v === c);
    });

    this.state.sub_category.map((c) => {
      wata_result.concat.wata.filter((v) => v === c);
    });

    this.state.genre.map((c) => {
      wata_result.concat.wata.filter((v) => v === c);
    });

    this.state.platform.map((c) => {
      wata_result.concat.wata.filter((v) => v === c);
    });

    this.state.keyword.map((c) => {
      wata_result.concat.wata.filter((v) => v === c);
    });

    return (
      <section className="container">
        <KeywordBar handleValueChange={this.handleValueChange2} />
        <SearchBar handleValueChange={this.handleValueChange} />
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="wata_list">
            {wata_result.map((wata) => {
              return (
                <Wata
                  key={wata.wata_id}
                  wata_id={wata.wata_id}
                  title={wata.title}
                  creator={wata.creator}
                  category={wata.category}
                  sub_category={wata.sub_category}
                  genre={wata.genre}
                  keyword={wata.keyword}
                  caution={wata.caution}
                  platform={wata.platform}
                  thumnail={wata.thumnail}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App; //App 을 사용할 수 있도록 export 해줌.
