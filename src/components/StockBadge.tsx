import React, { useEffect, useState } from "react";
import { StockBadgeProps } from "../interfaces/StockBadgeProps";
import { StockStatusType } from "../types/StockStatusType";

const StockBadge : React.FC<StockBadgeProps> = ({quantity, threshold}) => {

    // state hook
    const [status, setStatus] = useState<StockStatusType>("IN_STOCK");
    // className de base de bootstrap
    const [colorClass, setColorClass] = useState<string>("bg-green-100 text-green-800")

    useEffect(() : void => {
        if (quantity <= 0) {
            setStatus("OUT_OF_STOCK");
        } else if (quantity <= threshold) {
            setStatus("LOW_SCTOCK");
            setColorClass("bg-orange-100 text-orange-100");
        } else {
            console.log("IN_STOCK");
        };
    }, [status, colorClass])

    return (
        <span className={`stockageBadge ${colorClass}`}>
            {status.replace('_', ' ')}
        </span>
    );
};

export default StockBadge;