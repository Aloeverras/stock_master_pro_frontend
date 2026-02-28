import "../../css/MainTittle.scss";
import { FC, useRef } from "react";

export const MainTittle : FC<{ tittle : string }> = ({tittle}) => {

    const tittleRef = useRef<HTMLHeadingElement | null>(null);

    if (tittleRef.current) {
        tittleRef.current.textContent = tittle;
    };
    
    return (
        <h1 ref={tittleRef} id="mainTitle">{tittle}</h1>
    );

};