import React from "react";
import ReactDOM from "react-dom/client";
import StockerApp from "./StockerApp";

let htmlIdRoot : HTMLElement | null;
let reactRooter : ReactDOM.Root | null = null;

console.log("loging project...");

htmlIdRoot = document.getElementById("root");

if (!htmlIdRoot) {
    htmlIdRoot = null;
    throw new Error(`${htmlIdRoot} is null`)
};

reactRooter = ReactDOM.createRoot(htmlIdRoot);

if (!reactRooter){
    throw new Error("rooter is incorect");
};

console.log("id and rooter is ready !")


const RootReact = () => {
    reactRooter.render(
        <React.StrictMode>
            <StockerApp></StockerApp>
        </React.StrictMode>
    );
}

export default RootReact;