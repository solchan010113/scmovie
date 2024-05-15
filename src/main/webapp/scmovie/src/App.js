import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
