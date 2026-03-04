import { IProduit } from "../IProduit";

export interface ProductFormProps {
    onProductAdded : (newProduct : IProduit) => void
};