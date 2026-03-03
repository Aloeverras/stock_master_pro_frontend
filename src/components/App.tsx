import "../scss/App.scss";
import React from "react";
import ProductCard from "./ProductCard";
import { IProduit } from "../interfaces/IProduit";
import ProductForm from "./ProductForm";
import PargrapheComponent from "./PargrapheComponent";


const App : React.FC = () => {

    // produit imaginaire pour tester les component
    const testProduit : IProduit = {
        id : "2000",
        name : "test",
        sku : "test sku",
        category : "category test",
        currentStock : 0,
        minThreshold : 0,
        price : 0,
        lasteUpdate : new Date()
    }

    return (
        <>
            <main>
                <PargrapheComponent text=""></PargrapheComponent>
                // component de test en action dans la balise 'main'
                <ProductCard product={testProduit} onEdit={() => {
                    console.log("test")
                }}
                
                // function à encore définir dans la suite du project
                // funtion non défénitive
                onDelecte={() => {
                    console.log("tesy")
                }}
                />

                <ProductForm onProductAdded={
                    (produit : IProduit | Promise<IProduit>) : void => 
                    { 
                        console.log(produit) 
                    }
                    }>

                </ProductForm>

           </main>
        </>
    );
    
};

export default App;