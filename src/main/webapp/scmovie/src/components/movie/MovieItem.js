import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../../assets/scss/movie/movieItem.scss";

const MovieItem = ({ src, title, star }) => {
  return (
    <Link className={classNames("posterSection")}>
      <div className={classNames("imgWrap")}>
        <img src={src} />
      </div>
      <div className={classNames("posterInfoWrap")}>
        <span className={classNames("posterTitle")}>{title}</span>
        <span className={classNames("posterStar")}>★{star}</span>
      </div>
    </Link>
  );
};

export default MovieItem;
