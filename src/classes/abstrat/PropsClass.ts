export default abstract class PropsClass<T> {

    protected props : T;
    protected id : string | undefined
    protected classNames : string | undefined;

    constructor(
        props : T,
        id : string | undefined = undefined,
        classNames : string | undefined = undefined
    ) {
        this.props = props;
        this.id = id;
        this.classNames = classNames;
    };

    public get getProps() : T {
        return this.props;
    };

    public get getIdValue() : string | undefined {
        return this.id;
    };

    public get getClassNames() : string | undefined {
        return this.classNames;
    };

    public set setClassNames(newClassName : string ) {
        this.classNames = newClassName;
    }
    
    // absrat functions
    abstract toDictProp() : T;
    abstract toListKeysProps() : string[];
};