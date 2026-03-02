import { FC } from "react";
import { ProductFormProps } from "../interfaces/ProductFormProps";
import { IProductData } from "../interfaces/IProductData";
import { IProduit } from "../interfaces/IProduit";

const ProductForm : FC<ProductFormProps> = ({ onProductAdded }) => {

    const handleSumit : (formData : FormData) => Promise<void> = async (formData : FormData) => {

        const productData : IProductData = {
            name : formData.get("name"),
            sku : formData.get("sku"),
            currentStock : Number(formData.get("currentStock")),
            price : Number(formData.get("price")),
            minTheshold : 5
        };

        try {

            const response : Response = await fetch(
                "http://localhost:8080/api/product",
                {
                    method : "POST",
                    headers : {"Content-Type" : "application/json"},
                    body : JSON.stringify(productData)
                }
            );

            if (response.ok) {
                const saveProduct : Promise<IProduit> = await response.json();
                onProductAdded(saveProduct);
                (document.getElementById("product-form")) as HTMLFormElement;
            }

        } catch (error : unknown) {
            console.error("Error backend Java", error)
        };
    };

    return (
        <form id="product-form"
            action={handleSumit}
            className="
                bg-white
                p-6 
                rounded-2xl 
                mb-8 grid 
                grid-cols-2 
                gap-4 
                shadow-sm 
                border 
                border-gray-100
            "
        >
            <div className="col-span-2">
                <h2 className="
                    text-xl 
                    font-bold 
                    text-grey-800 
                    mb-1
                ">
                    New Produit
                </h2>
                <p className="
                    text-sm
                    text-grey-400
                    mb-4
                ">
                    Remplissez les informations pour générer l'étiquette
                </p>
            </div>
            <div className="flex flex-col gap-1">
                <label className="
                    text-xs
                    font-semibold
                    text-grey-500
                " >
                    Nom du produit
                </label>
            </div>
        </form>
    );
};

export default ProductForm;