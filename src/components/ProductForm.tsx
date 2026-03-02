import { FC, FormEvent, useState } from "react";
import { ProductFormProps } from "../interfaces/ProductFormProps";

const ProductForm : FC<ProductFormProps> = ({ onProductAdded }) => {

    const [formatData, setFormatData] = useState({
        name : "",
        sku : "",
        category : "",
        currentStock : 0,
        minThreshold : 5,
        prince : 0
    });

    const handleSumit : (formData : FormData) => Promise<void> = async (formData : FormData) => {
        const productData = {
            name : formData.get("name"),
            sku : formData.get("sku"),
            currentStock : Number(formData.get("currentStock")),
            price : Number(formData.get("price")),
            minTheshold : 5
        };
    };

    return (
        <></>
    );
};

export default ProductForm;