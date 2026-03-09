import { PropsType } from "../../types/props/PropsType";
import PropsClass from "../abstrat/PropsClass";

type TittlePropsType = { sizeTittle : "h1" | "h2" | "h3" | "h4"  };

export default class TittlePropsClass extends PropsClass<TittlePropsType> {

    constructor(propsTitle : TittlePropsType = {sizeTittle : "h1"}){
        super(propsTitle);

    };

    public toDictProps(): PropsType & TittlePropsType {
        if (this.data) {
            return {
                ...this.data,
                id : this.id,
                className : this.className
            };
        } else {
            throw new Error("tittle is incorect")
        };
    };

}