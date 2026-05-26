import React, { createContext, useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  openOrderWindow: (uid, mode) => {},
  closeBuyWindow: () => {},
  closeOrderWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isOrderWindowOpen, setIsOrderWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedOrderMode, setSelectedOrderMode] = useState("BUY");

  const handleOpenOrderWindow = (uid, mode = "BUY") => {
    setIsOrderWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedOrderMode(mode);
  };

  const handleCloseOrderWindow = () => {
    setIsOrderWindowOpen(false);
    setSelectedStockUID("");
    setSelectedOrderMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: (uid) => handleOpenOrderWindow(uid, "BUY"),
        openSellWindow: (uid) => handleOpenOrderWindow(uid, "SELL"),
        openOrderWindow: handleOpenOrderWindow,
        closeBuyWindow: handleCloseOrderWindow,
        closeOrderWindow: handleCloseOrderWindow,
      }}
    >
      {props.children}
      {isOrderWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          mode={selectedOrderMode}
          onClose={handleCloseOrderWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
