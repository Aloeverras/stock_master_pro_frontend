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

                // nom de la class général
                className="inputComponent"

                // le type ne doit pas changer
                type="text"

                // le nom s'accord à une des clé
                name={nameInputComponent}

                // valeur d'un des clé
                value={getValue(valueInputComponent)}

                // function général
                onChange={handleChangeFunc}
            />
        </p>
    );
};

export default InputFormComponant;