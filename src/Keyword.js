import React from "react";

class Keyword extends React.Component {
  render() {
    <div className="keyword-list">
      <h3 class="list__name">장르</h3>
      <div class="list__bubbles">
        <div class="bubble">
          <input
            type="checkbox"
            name="genre"
            value="{{genre}}"
            onChange={this.props.handleValueChange2}
          ></input>
          <label for="{{item}}">{{ item }}</label>
        </div>
      </div>
    </div>;
  }
}

export default Keyword;
