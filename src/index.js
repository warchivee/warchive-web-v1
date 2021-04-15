import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*
리액트가 빠른 이유...
HTML을 전체 그리는게 아니라, HTML 안에서 필요한 HTML을 삭제, 추가, 수정할 수 있음!!
먼저 빈 HTML 로드하고, 내가 추가한 HTML 컴포넌트들을 밀어넣음.
컴포넌트란? HTML을 반환하는 함수.

아래처럼 js 와 html 사이의 조합을 jsx라고 부름. render(<App />) ...
참고로 react는 하나의 component만을 render한다.  

component 는 pops 로 정보를 전달한다.
Food(props) {props.name, props.somthing...} ... or Food({name, papa}) {name, papa} ..
<Food name="kimchi" something={true} papa = {["hello", 1, 2]}/> ...
참고)js 코드는 {} 블록 안에..

또 각각의 component들을 구분하는 값은 key 값임. props 에 key 넣기

props type 검사하기 위해 npm i props-type

component 는 function 과 class가 있음.
class 는 extends React.Compoent 로 확장되어야 하고 render() { } 안에 return 값 넣어야됨.
class component는 state를 가짐. (사용이유!!) state={}; state는 공유변수로 변하는 값임..(아마도)
setState() 로 state 변경함. 특히 이 function 은 render를 호출함!!

class component는 props 를 재사용함. > a 팔로우하고 b로 넘어가면 b의 props가 뜸
function component는 props 를 재사용하지 않음.  > a를 팔로우하고 b로 넘어가면 a의 props가 뜸.

class component의 cycle : Construct > Render > Mount > Dis...
*/

ReactDOM.render(<App />, document.getElementById("root")); //App 을 public/index.html 의 root 라는 id를 가진 element 자식으로 추가함.
