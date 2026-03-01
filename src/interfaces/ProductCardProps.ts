import { IProduit } from "./IProduit";

export interface ProductCardProps {
    product : IProduit,
    onEdit : (id : string) => void,
    onDelecte : (id : string) => void
};