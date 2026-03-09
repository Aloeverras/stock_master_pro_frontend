import React from "react"
import { StockStatusType } from "../../types/StockStatusType"
import { StockStatusFunctionType } from "../../types/context/StockStatusFunctionType";


const StockStatusContext : StockStatusFunctionType = () => {
    return React.createContext<StockStatusType>("OUT_OF_STOCK");
};

export default StockStatusContext;