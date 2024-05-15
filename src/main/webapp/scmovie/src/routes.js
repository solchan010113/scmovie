import React from "react";

const MovieHome = React.lazy(() => import("./views/movie/MovieHome"));

const routes = [{ path: "/movie", name: "MovieHome", element: MovieHome }];

export default routes;
