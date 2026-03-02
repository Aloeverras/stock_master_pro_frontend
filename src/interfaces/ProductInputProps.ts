export interface PorductInputProps {
    labelName : "name" | "sku" | "category" | "currentStock" | "minThreshold" | "price" | "lasteUpdate",
    classesNameLabel : string | undefined 
    inputName : "name-input" | "sku-input" | "category-input" | "currentStock-input" | "minThreshold-input" | "price-input" | "lasteUpdate-input",
    classesNamesInput : string | undefined,
    inputType : "text" | "number"
    primaryColor : string,
    secondaryColor : string
}