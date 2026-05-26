import { React, useState, useContext } from "react";
import { watchlist } from "../data";
import { MdBarChart, MdKeyboardArrowDown, MdKeyboardArrowUp, MdMoreHoriz } from "react-icons/md";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  const { openOrderWindow } = useContext(GeneralContext);

  return (
    <div className="watchlist-container border-end bg-white h-100 d-flex flex-column">
      <div className="search-container p-3 border-bottom sticky-top bg-white shadow-sm z-3">
        <div className="position-relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search stocks, indices..."
            className="form-control form-control-lg border-0 bg-light px-3 py-2 shadow-none"
            style={{ fontSize: "14px", borderRadius: "10px" }}
          />
          <div className="d-flex justify-content-end mt-2">
            <span className="counts text-muted" style={{ fontSize: "11px", letterSpacing: "0.5px" }}> 
              <span className="fw-bold text-dark">{watchlist.length}</span> / 50 stocks
            </span>
          </div>
        </div>
      </div>

      <div className="flex-grow-1 overflow-auto custom-scrollbar">
        <ul className="list-group list-group-flush">
          {watchlist.map((stock, index) => {
            return (
              <WatchListItem
                stock={stock}
                key={index}
                onBuy={() => openOrderWindow(stock.name, "BUY")}
                onSell={() => openOrderWindow(stock.name, "SELL")}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, onBuy, onSell }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li 
      onMouseEnter={() => setShowWatchlistActions(true)} 
      onMouseLeave={() => setShowWatchlistActions(false)} 
      className="list-group-item list-group-item-action border-0 border-bottom px-3 py-3 position-relative transition-all"
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <p className={`mb-0 fw-bold ${stock.isDown ? "text-danger" : "text-success"}`} style={{ fontSize: "14px" }}>{stock.name}</p>
        <div className="d-flex align-items-center">
          <span className="text-muted small me-2" style={{ fontSize: "12px" }}>{stock.percent}</span>
          {stock.isDown ? (
            <MdKeyboardArrowDown className="text-danger" />
          ) : (
            <MdKeyboardArrowUp className="text-success" />
          )}
          <span className="price ms-2 fw-bold text-dark" style={{ fontSize: "14px" }}>{stock.price}</span>
        </div>
      </div>
      
      {showWatchlistActions && (
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-white d-flex align-items-center justify-content-end px-3 animate__animated animate__fadeIn animate__faster">
           <div className="btn-group shadow-sm" style={{ borderRadius: "8px", overflow: "hidden" }}>
            <button onClick={onBuy} className="btn btn-success py-1 px-3 border-0 small fw-bold" title="Buy (B)" style={{ fontSize: "12px" }}>BUY</button>
            <button onClick={onSell} className="btn btn-danger py-1 px-3 border-0 small fw-bold" title="Sell (S)" style={{ fontSize: "12px" }}>SELL</button>
            <button className="btn btn-light py-1 px-2 border-0" title="Analytics (A)">
              <MdBarChart size={18} className="text-muted" />
            </button>
            <button className="btn btn-light py-1 px-2 border-0" title="More">
              <MdMoreHoriz size={18} className="text-muted" />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};