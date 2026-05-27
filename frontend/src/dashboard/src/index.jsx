import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { GeneralContextProvider } from "./components/GeneralContext";
function DashboardIndex() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <GeneralContextProvider>
          <div className="row g-0">
            <div
              className="col-lg-4 col-xl-3 d-none d-lg-block border-end"
              style={{ height: "calc(100vh - 70px)", position: "sticky", top: "70px" }}
            >
              <WatchList />
            </div>
            <div className="col-lg-8 col-xl-9">
              <div
                className="content-area custom-scrollbar"
                style={{ height: "calc(100vh - 70px)", overflowY: "auto" }}
              >
                <Outlet />
              </div>
            </div>
          </div>
        </GeneralContextProvider>
      </div>
    </>
  );
}

export default DashboardIndex;
