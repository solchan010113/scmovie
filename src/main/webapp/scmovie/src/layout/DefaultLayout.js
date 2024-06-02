import React from "react";
import GlobalHeader from "../components/GlobalHeader";
import Content from "../components/Content";
import GlobalNavBar from "../components/GlobalNavBar";
import classNames from "classnames";
import "../assets/scss/defalutLayout.scss";

const DefaultLayout = () => {
  return (
    <div>
      <GlobalHeader />
      <GlobalNavBar />
      <div className={classNames("content")}>
        <Content />
      </div>
    </div>
  );
};

export default DefaultLayout;
