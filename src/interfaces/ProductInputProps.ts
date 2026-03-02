import { InputeNameType } from "../types/alias/InputeNameType"

export interface ProductInputProps {
    labelName : "name" | "sku" | "category" | "currentStock" | "minThreshold" | "price" | "lasteUpdate",
    classesNameLabel : string | undefined 
    inputName : InputeNameType,
    classesNamesInput : string | undefined,
    inputType : "text" | "number"
    primaryColor : string,
    secondaryColor : string
}