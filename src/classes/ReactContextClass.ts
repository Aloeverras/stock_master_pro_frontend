import React from "react";

export default class ReactContextClass<T> {

    #valueContext : T;
    #contextValue : React.Context<T>;

    constructor(context : T) {
        this.#valueContext = context;
        this.#contextValue = React.createContext<T>(this.#valueContext);
    };

    public get getValueContext() : T {
        return this.#valueContext;
    }

    public get getContextValue() : React.Context<T> {
        return this.#contextValue;
    };

}