import { FC, useEffect } from "react";

export const ScriptComponent : FC = () => {

    useEffect(() => {
        console.log("test");
    }, []);

    return null;
}