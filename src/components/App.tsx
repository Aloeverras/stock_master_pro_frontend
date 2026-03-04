import "../scss/App.scss";
import React from "react";
import HeaderApp  from "./HeaderApp"


const App : React.FC = 
    () : React.JSX.Element => {


    return (
        <div id="app-container">
            <HeaderApp/>
            <main></main>
            <footer></footer>
        </div>
    );
    
};

export default App;