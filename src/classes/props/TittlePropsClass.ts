import PropsClass from "../abstrat/PropsClass";

type TittlePropsType = {
    sizeTittle : "h1" | "h2" | "h3"
};


export default class TittlePropsClass extends PropsClass<
    TittlePropsType
    > 
{

    constructor(tittleSize : "h1" | "h2" | "h3") {
        super({sizeTittle : tittleSize});
    };

    public toDictProp(): TittlePropsType {
        return {
                sizeTittle : this.props.sizeTittle
            }
    }
}