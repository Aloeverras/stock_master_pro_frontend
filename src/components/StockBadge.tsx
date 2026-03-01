import React from "react";
import { StockBadgeProps } from "../interfaces/StockBadgeProps";
import { StockStatusType } from "../types/StockStatusType";

const StockBadge : React.FC<StockBadgeProps> = ({quantity, threshold}) => {

    let status : StockStatusType = "IN_STOCK";

    if (quantity <= 0) {
        status = "OUT_OF_STOCK";
    } else if (quantity <= threshold) {
        status = 'LOW_SCTOCK'
    };

    return (
        <span>
            {status.replace('_', ' ')}
        </span>
    );
};

export default StockBadge;