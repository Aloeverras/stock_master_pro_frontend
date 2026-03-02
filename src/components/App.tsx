import React from "react";
import ProductCard from "./ProductCard";
import { IProduit } from "../interfaces/IProduit";


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
            // main, balise principal du project
            <main>
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
           </main>
        </>
    );
    
};

export default App;