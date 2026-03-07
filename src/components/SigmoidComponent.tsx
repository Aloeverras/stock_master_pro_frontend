import React from "react";
import sigmoidAsyn from "../functions/asynch/sigmoideAsyn";
import { SigmoideAsynType } from "../types/alias/SigmoideAsynType";


const SigmoidComponent : React.FC = () : React.JSX.Element => {

    const [result, setResult] = React.useState<number>(0);
    const sigmoideCallBack : SigmoideAsynType = React.useCallback(sigmoidAsyn, []);

    React.useEffect(() => {
        const executeAsyn : () => Promise<void> = async ()  => {
            const res : number = await sigmoideCallBack(10);
            setResult(res);
        };

        executeAsyn();
    }, []);

    return (
        <div>
            <h3>sigmoide</h3>
            <p>{result}</p>
        </div>
    );
};

export default SigmoidComponent;