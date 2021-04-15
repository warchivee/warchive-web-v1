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
          <span className="header__bookmark" id={wata_id}>
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
                <a href={p.url}>
                  <span>{p.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="body__column">
            <ul className="wata__keywords">
              {keywords.map((k, index) => (
                <li key={index} className="keywords__keyword">
                  <span>#{k}</span>
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
              <span>#{c}</span>
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
