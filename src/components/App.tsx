import "../scss/App.scss";
import React  from "react";
import HeaderApp  from "./HeaderApp"

type HeaderType = typeof HeaderApp;

const Header : HeaderType = HeaderApp;

const App : React.FC = 

    () : React.JSX.Element => {


        

        return (
            <div id="app-container">
                <Header></Header>
                <main></main>
                <footer></footer>
            </div>
        );
    
};

export default App;