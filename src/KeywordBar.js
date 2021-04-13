import React from "react";

class KeywordBar extends React.Component {
  render() {
    return (
      <div>
        <input
          className="search__input"
          type="search"
          placeholder="제목으로 검색"
          onChange={this.props.handleValueChange2}
        ></input>
      </div>
    );
  }
}

export default KeywordBar;

<div class="keywordbar">
   <div class="keywordbar__bubbles-container">
      <div class="bubbles__selected-bubble">

      </div>
      <div class="bubbles__bubble-list">
         <div class="bubble-list__category">
            <h3 class="category__name">장르</h3>
            <div class="bubble-list__bubbles">
               <div class="bubble">
                  <input type="checkbox" id="{{item_replace}}" name="genre" value="{{item}}" onChange={this.props.handleValueChange2}>
                  <label for="{{item}}">{{item}}</label>
               </div>
            </div>
         </div>

         <div class="bubble-list__category">
            <h3 class="category__name">매체</h3>
            <div class="bubble-list__bubbles">
               <div class="bubble">
                  <input type="checkbox" id="{{item}}" name="medium" value="{{item}}" onChange={this.props.handleValueChange2}>
                  <label for="{{item}}">{{item}}</label>
               </div>
            </div>
         </div>

         <div class="bubble-list__category">
            <h3 class="category__name">플랫폼</h3>
            <div class="bubble-list__bubbles">
               <div class="bubble">
                  <input type="checkbox" id="{{item}}" name="platform" value="{{item}}" onChange={this.props.handleValueChange2}>
                  <label for="{{item}}">{{item}}</label>
               </div>
            </div>
         </div>

         <div class="bubble-list__category">
            <h3 class="category__name">키워드</h3>
            <div class="bubble-list__bubbles">
               <div class="bubble">
                  <input type="checkbox" id="{{item}}" name="introduction" value="{{item}}" onChange={this.props.handleValueChange2}>
                  <label for="{{item}}">{{item}}</label>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="keywordbar__button">
      <span class="button__text">키워드로 찾기</span>
   </div>
</div>