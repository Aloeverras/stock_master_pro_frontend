import React  from "react";
import HeaderApp from "./HeaderApp";
import StockStatusContext from "../hooks/context/StockStatusContext";
import { StockStatusType } from "../types/StockStatusType";

const App : React.FC = 

    () : React.JSX.Element => {

        const StockStatus : React.Context<StockStatusType> = StockStatusContext();


        return (
            <div id="app-container">
                <HeaderApp></HeaderApp> 
                <main>
                    {
                        <StockStatus.Provider value="OUT_OF_STOCK">

                        </StockStatus.Provider>
                    }
                </main>
                <footer></footer>
            </div>
        );
    
};

export default App;