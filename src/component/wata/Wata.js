import React from "react";
import PropTypes from "prop-types";
import "./Wata.css";

function Wata({
  wata_id,
  title,
  creator,
  category,
  sub_category,
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
    <div className="wata" style={thumnail_style}>
      <div className="wata__header">
        <div className="header__row header__titles">
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
        <div className="header__row header__creator">
          <span className="wata__creator">{creator}</span>
        </div>
        <div className="header__row header__categorys">
          <span className="categorys__category wata__category">
            #{category}
          </span>
          <span className="categorys__category wata__sub-category">
            #{sub_category}
          </span>
          <span className="categorys__category wata__genre">#{genre}</span>
        </div>
      </div>
      <div className="wata__body">
        <div className="body__column">
          <ul className="wata__platforms">
            {platforms.map((p, index) => (
              <li key={index} className="platforms__platform">
                {p.name.length > 0 ? (
                  <a href={p.url}>
                    <span>{p.name}</span>
                  </a>
                ) : (
                  <span></span>
                )}
              </li>
            ))}
          </ul>
          <div className="body__column">
            <ul className="wata__keywords">
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
          </div>
        </div>
      </div>
      <div className="wata__footer">
        <ul className="footer__cautions">
          {cautions.map((c, index) => (
            <li key={index} className="cautions__caution">
              {c.length > 0 ? (
                <div className="caution">#{c}</div>
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

Wata.propTypes = {
  wata_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  sub_category: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  keyword: PropTypes.arrayOf(PropTypes.string),
  caution: PropTypes.arrayOf(PropTypes.string),
  platform: PropTypes.arrayOf(PropTypes.object),
  thumnail: PropTypes.string,
};

export default Wata;
