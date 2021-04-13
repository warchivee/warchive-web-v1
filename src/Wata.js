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
  keyword,
  caution,
  platform,
  thumnail,
}) {
  let thumnail_style = {
    backgroundImage: `url(${thumnail})`,
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
            {platform.map((p, index) => (
              <li key={index} className="platforms__platform">
                <a href={p.url}>
                  <span>{p.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="body__column">
            <ul className="wata__keywords">
              {keyword.map((k, index) => (
                <li key={index} className="keywords__keyword">
                  #{k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="wata__footer">
        <ul className="footer__cautions">
          {caution.map((c, index) => (
            <li key={index} className="cautions__caution">
              #{c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Wata.propTypes = {
  wata_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  sub_category: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  keyword: PropTypes.arrayOf(PropTypes.string).isRequired,
  caution: PropTypes.arrayOf(PropTypes.string).isRequired,
  platform: PropTypes.arrayOf(PropTypes.object).isRequired,
  thumnail: PropTypes.string,
};

export default Wata;
