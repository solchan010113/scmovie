import React from "react";
import classNames from "classnames";
import "../assets/scss/header.scss";
import { Link } from "react-router-dom";

const GlobalHeader = () => {
  return (
    <header className={classNames("headerWrap")}>
      <div className={classNames("headerInner")}>
        <h1 className={classNames("headerLeft")}>로고</h1>
        <div className={classNames("headerRight")}>
          <Link>로그인</Link>
          <Link>회원가입</Link>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
