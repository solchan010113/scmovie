import React from "react";
import { Route, Routes, Switch } from "react-router-dom";

import routes from "../routes";

const NonPage = React.lazy(() => import("../views/errpages/NonPage"));

const Content = () => {
  return (
    <Routes>
      {routes.map((route, idx) => {
        return route.element && <Route key={idx} path={route.path} exact={true} name={route.name} element={<route.element />} />;
      })}
    </Routes>
  );
};

export default Content;
