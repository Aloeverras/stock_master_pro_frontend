import "../scss/App.scss";
import React from "react";
import ProductCard from "./ProductCard";
import { IProduit } from "../interfaces/IProduit";


const App : React.FC = () => {

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
           <ProductCard product={testProduit} onEdit={() => {
            console.log("test")
           }}
           
           onDelecte={() => {
            console.log("tesy")
           }}
           />
           <ProductCard product={testProduit} onEdit={() => {
            console.log("test")
           }}
           
           onDelecte={() => {
            console.log("tesy")
           }}
           />
        </>
    );
    
};

export default App;