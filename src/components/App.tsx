import "../scss/App.scss";
import React from "react";
import { AppStockerType } from "../types/AppStockerType";


const App : React.FC<AppStockerType> = (props : AppStockerType) => {

    return (
        <>
            <header>
                <h1>
                    {
                        props.header.title
                    }
                </h1>
            </header>
            <main>
                {
                    props.main.buttons.map((button : { text : string}, index : number) => (
                        <button key={index}>{button.text}</button>
                    ))
                }
            </main>
            <footer>
                {props.footer.text}
            </footer>
        </>
    );
    
};

export default App;