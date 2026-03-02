import { IProduit } from "./IProduit";

export interface ProductFormProps {
    onProductAdded : (newProduct : Promise<IProduit> | IProduit) => void
};