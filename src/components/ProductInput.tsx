import { FC } from "react";
import { ProductInputProps } from "../interfaces/ProductInputProps";

const ProductInput : FC<ProductInputProps> = (

    { 
        labelName, 
        classesNameLabel, 
        classesNamesInput ,
        inputName,
        inputType,
        primaryColor,
        secondaryColor
    }

) => {

    return (
        <div className="flex flex-col gap-1">
                <label className={`${classesNameLabel} 
                    text-xs
                    font-semibold
                    text-${primaryColor}-500
                 `}>
                    {labelName}
                </label>
                <input 
                type={inputType}
                name={inputName}
                className={`
                    p-3
                    bg-${primaryColor}-50
                    border-none
                    rounded-xl 
                    focus:ring-2
                    focus:ring-${secondaryColor}-500
                    outline-none
                    ${classesNamesInput}
                `}/>
            </div>
    );
};

export default ProductInput;