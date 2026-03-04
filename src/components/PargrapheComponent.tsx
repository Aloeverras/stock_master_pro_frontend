import React from "react"
import { ParagrapheProps } from "../interfaces/props/ParagrapheProps";


const PargrapheComponent : React.FC<ParagrapheProps> = ({ text = "" }) => {

    const displayedText = text && text.length > 0 ? text : "undefined paragraphe";

    return (
        <p className="paragraphe">
            {displayedText}
        </p>
    );
};

export default PargrapheComponent;