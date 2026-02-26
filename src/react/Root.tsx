import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

export default class Root {
    constructor() {
        ReactDOM.createRoot(document.getElementById("root")!).render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        );
    }
};