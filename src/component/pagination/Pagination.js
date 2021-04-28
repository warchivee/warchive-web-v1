import React from "react";
import "./Pagination.css";

export default function Pagination(props) {
  return (
    <div className="pagination">
      <ul pagination="pagination">
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
      </ul>
    </div>
  );
}
