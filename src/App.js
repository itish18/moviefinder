import React, { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Details = React.lazy(() => import("./pages/Details"));

function App() {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[100vh] text-[3rem] font-bold">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<Details />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
