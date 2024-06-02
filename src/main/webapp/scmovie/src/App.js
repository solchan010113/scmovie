import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback="loding">
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
