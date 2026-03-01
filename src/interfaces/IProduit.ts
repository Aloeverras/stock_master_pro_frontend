export interface IProduit {
    id : string,
    npme : string,
    sku : string,
    category : string,
    currentStock : number,
    minThreshold : number,
    price : number,
    lasteUpdate : Date
};