import React from "react";
import "./Searchbar.css";

function SearchBar(props) {
  return (
    <div className="searchbar__container">
      <input
        className="search__input"
        type="search"
        placeholder="제목/작가/감독명으로 검색"
        onChange={props.search_searchbar}
      ></input>
    </div>
  );
}

export default SearchBar;
