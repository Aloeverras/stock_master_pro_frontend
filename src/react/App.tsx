import "../css/App.scss";
import { FC, useState } from "react";
import { MainTittle } from "./components/MainTittle";
import { ScriptComponent } from "./components/ScriptComponent";

export const App : FC = () => {

    const [tittle, setTitlle] = useState<string>("stocker master");

    if (!tittle) {
        setTitlle("default tittle");
    };

    if (tittle) {
        return (
        <>
            <header></header>
            <main>
                <MainTittle tittle={tittle}></MainTittle>
                <ScriptComponent></ScriptComponent>
            </main>
            <footer></footer>
        </>  
        );
    } else {
        throw new Error("Tittle is not defined");
    };
}