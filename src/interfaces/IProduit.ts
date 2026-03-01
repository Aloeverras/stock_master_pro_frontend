export interface IProduit {
    id : string,
    name : string,
    sku : string,
    category : string,
    currentStock : number,
    minThreshold : number,
    price : number,
    lasteUpdate : Date
};