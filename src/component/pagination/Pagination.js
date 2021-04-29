import React from "react";
import "./Pagination.css";

export default function Pagination(props) {
  return (
    <div className="pagination">
      <ul pagination="pagination">
        <li
          onClick={() => {
            props.paginate(1);
            window.scrollTo(0, 0);
          }}
        >
          <i class="fas fa-angle-double-left"></i>
        </li>
        {props.pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => {
              props.paginate(number);
              window.scrollTo(0, 0);
            }}
          >
            <span
              className={
                number == props.currentPageNumber ? "current_page" : "page"
              }
            >
              {number}
            </span>
          </li>
        ))}
        <li
          onClick={() => {
            console.log(
              Math.ceil(props.searchResultLength / props.watasPerPage)
            );
            props.paginate(
              Math.ceil(props.searchResultLength / props.watasPerPage)
            );
            window.scrollTo(0, 0);
          }}
        >
          <i class="fas fa-angle-double-right"></i>
        </li>
      </ul>
    </div>
  );
}
