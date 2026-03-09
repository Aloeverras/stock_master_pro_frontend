import { CSSProperties, ReactNode } from "react";

export default abstract class PropsClass<T> {
    protected id? : string;
    protected className? : string;
    protected style? : CSSProperties;
    protected children? : ReactNode;
    protected data? : T;
    protected isLoading?: boolean;
    protected isDisabled?: boolean;

    constructor(
        data : T,
        id : string  = "",
        className : string = "",
        style : CSSProperties | undefined = undefined,
        children : ReactNode | undefined = undefined,
        isLoading : boolean | undefined = undefined,
        isDisabled : boolean | undefined = undefined

    ){
        this.data = data;
        this.id = id;
        this.className = className;
        this.style = style;
        this.children = children;
        this.isLoading = isLoading;
        this.isDisabled = isDisabled;
    };

    // getters

    public get getData() : T | undefined {
        return this.data;
    };

    public get getIdProd() : string | undefined {
        return this.id;
    };

    public get getClassNameProp() : string | undefined {
        return this.className;
    };

    public get getStyleProps() : CSSProperties | undefined {
        return this.style;
    };

    public get getChildrenProp() : ReactNode | undefined {
        return this.children;
    };

    public get getIsLoading() : boolean | undefined {
        return this.isLoading;
    };

    public get getIsDisabled() : boolean | undefined {
        return this.isDisabled;
    }
};