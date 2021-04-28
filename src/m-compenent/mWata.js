import React from "react";
import "./mWata.css";

export default function mWata({
  wata_id,
  title,
  creator,
  category,
  genre,
  keywords,
  cautions,
  platforms,
  thumnail,
  bookmark,
  add_bookmark,
  delete_bookmark,
}) {
  let thumnail_style = {
    backgroundImage: `url(${thumnail})`,
    backgroundSize: "100%",
  };

  return (
    <div className="mWata">
      <div className="mWata-thumnail" style={thumnail_style}></div>
      <div className="mWata-contents">
        <div className="mWata-contents__header">
          <h3 className="header__title">{title}</h3>
          <span
            className={
              bookmark ? "header__bookmark bookmark" : "header__bookmark"
            }
            onClick={
              bookmark
                ? () => delete_bookmark(wata_id)
                : () => add_bookmark(wata_id)
            }
          >
            <i className="fas fa-star"></i>
          </span>
        </div>
        <div className="mWata-contents__creator">{creator}</div>
        <ul className="mWata-contents__keywords">
          <li>#{category}</li>
          <li>#{genre}</li>
          {keywords.map((k, index) => (
            <li key={index} className="keywords__keyword">
              {k.length > 0 ? (
                <span className="keyword">#{k}</span>
              ) : (
                <span></span>
              )}
            </li>
          ))}
        </ul>
        <ul className="mWata-thumnail__cautions">
          {cautions.map((c, index) => (
            <li key={index}>
              {c.length > 0 ? (
                <div className="caution">#{c}</div>
              ) : (
                <span></span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mWata-overlay">
        <ul className="mWata-overlay__platforms">
          {platforms.map((p, index) => (
            <li key={index}>
              {p.name.length > 0 ? (
                <a href={p.url} target="_blank">
                  <span>{p.name}</span>
                </a>
              ) : (
                <span></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
