import React from "react";
import "./Searchbar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar__container">
        <input
          className="search__input"
          type="search"
          placeholder="제목/작가/감독명으로 검색"
          onChange={this.props.search_searchbar}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
