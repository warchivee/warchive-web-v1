import React from "react";
import "./Pagination.css";

export default function Pagination(props) {
  console.log("요거 : ");
  console.log(props.pageNumbers);

  return (
    <div className="pagination">
      <ul pagination="pagination">
        {props.pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number == props.currentPageNumber ? "current_page" : "page"
            }
            onClick={() => props.paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}
