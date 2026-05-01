import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="container-fluid p-0">
      <GeneralContextProvider>
        <div className="row g-0">
          <div className="col-lg-4 col-xl-3 d-none d-lg-block border-end" style={{ height: "calc(100vh - 70px)", position: "sticky", top: "70px" }}>
            <WatchList />
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="content-area custom-scrollbar" style={{ height: "calc(100vh - 70px)", overflowY: "auto" }}>
              <Routes>
                <Route exact path="/" element={<Summary />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/holdings" element={<Holdings />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/funds" element={<Funds />} />
                <Route path="/apps" element={<Apps />} />
              </Routes>
            </div>
          </div>
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;
