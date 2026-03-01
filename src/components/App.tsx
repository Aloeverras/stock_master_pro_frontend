import React from "react";


const App : React.FC = () => {

    const GET_TITTLE = () : string => "scoker master";

    return (
        <>
            <header>
                <h1>{GET_TITTLE()}</h1>
            </header>
            <main></main>
            <footer></footer>
        </>
    );
    
};

export default App;