import React from "react";
import { InputStokerType } from "../types/InputStockerType";
import { InputComponentValutType } from "../types/InputComponentValutType";


const InputFormComponant : React.FC<InputStokerType> = (
    {
        nameInputComponent,
        valueInputComponent,
        handleChangeFunc
    }
) : React.JSX.Element => {


    // function pour convertir la valeur directement en string ou chaine de charactères
    const getValue = (valueKey : InputComponentValutType) : string => {
        return String(valueKey);
    };

    
    return (

        <p className="inputComponant">

            <label className="labelComponent">
                {nameInputComponent}
            </label>

            <input
                className="inputComponent"
                type="text"
                name={nameInputComponent}
                value={getValue(valueInputComponent)}
                onChange={handleChangeFunc}
            />
        </p>
    );
};

export default InputFormComponant;