import React from "react";
import classNames from "classnames";
import "../assets/scss/navbar.scss";
import { Link } from "react-router-dom";

const GlobalNavBar = () => {
  return (
    <div className={classNames("navWrap")}>
      <div className={classNames("navInner")}>
        <div className={classNames("navLeft")}>
          <ul>
            <li>
              <Link to={"/movie"}>영화</Link>
            </li>
            <li>극장</li>
            <li>예매</li>
          </ul>
        </div>
        <div className={classNames("navRight")}>
          <div className={classNames("searchBar")}>
            <input type="search" placeholder="작품 이름을 입력하세요"></input>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNavBar;
