import { IProduit } from "../interfaces/IProduit";
import { InputComponentValutType } from "./InputComponentValutType";

export type InputStokerType = {
    // assurer que le nom correspond à une des clés
    nameInputComponent : keyof IProduit;
    valueInputComponent : InputComponentValutType ,
    handleChangeFunc : () => void
};