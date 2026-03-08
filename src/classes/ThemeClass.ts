import { LightType } from "../types/LightType";

export default class ThemeClass {
    
    #light : LightType;

    constructor(light : LightType){
        this.#light = light;
    };

    public get getLight() : LightType {
        return this.#light;
    };

    public set setLight(newTheme : LightType)  {
        try {
            this.#light = newTheme;
        } catch (error : unknown) {
            console.error(error);
        };
    }
};