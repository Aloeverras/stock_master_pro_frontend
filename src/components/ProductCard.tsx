import React from "react";
import { ProductCardProps } from "../interfaces/ProductCardProps";
import StockBadge from "./StockBadge";

const ProductCard : React.FC<ProductCardProps> = ({ product, onEdit, onDelecte }) => {


    return (
        <div className="boder rounded-xl p4 bg-white hover:shadown-md transition-shadown">

            <div className="flex justify-between items-start md-2">

                <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                </h3>

                <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {product.sku}
                </p>

                <StockBadge quantity={product.currentStock} threshold={product.minThreshold}/>

            </div>
            
            <div className="mt-4 flex justify-between intems-end">
                <p className="text-xs text-gray-400">Quantité en stock</p>
                <p className="text-2x1 font-semibold">{product.currentStock}</p>
            </div>

            <div>

                <div className="flex gap-2">
                    <button onClick={() => onEdit(product.id)} className="px-3 py-1 text-sm border border-red-600 text-blue-600 rounded hover:bg-blue-50">Modifier</button>
                    <button onClick={() => onDelecte(product.id)} className="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-50">Supprimer</button>
                </div>

            </div>

        </div>
    );
};

export default ProductCard