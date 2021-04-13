import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          className="search__input"
          type="search"
          placeholder="제목으로 검색"
          onChange={this.props.handleValueChange}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
