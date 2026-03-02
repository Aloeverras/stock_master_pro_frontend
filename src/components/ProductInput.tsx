import { FC } from "react";
import { PorductInputProps } from "../interfaces/ProductInputProps";

const ProductInput : FC<PorductInputProps> = (
    { 
        labelName, 
        classesNameLabel, 
        classesNamesInput ,
        inputName
    }
) => {
    return (
        <div className="flex flex-col gap-1">
                <label className={`${classesNameLabel} 
                    text-xs
                    font-semibold
                    text-grey-500
                 `}>
                    {labelName}
                </label>
                <input 
                type="text" 
                name={inputName}
                className={`
                    p-3
                    bg-grey-50
                    border-none
                    rounded-xl 
                    focus:ring-2
                    focus:ring-blue-500
                    outline-none
                    ${classesNamesInput}
                `}/>
            </div>
    );
};

export default ProductInput;