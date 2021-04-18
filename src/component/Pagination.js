import React from "react";

export default function Pagination(props) {
  return (
    <div>
      <ul>
        {props.pageNumbers.map((number) => (
          <li key={number} onClick={props.paginate(number)}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}
