export default abstract class PropsClass<T> {

    protected props : T;

    constructor(props : T) {
        this.props = props;
    };

    public get getProps() : T {
        return this.props;
    };

    abstract toDictProp() : T;

};