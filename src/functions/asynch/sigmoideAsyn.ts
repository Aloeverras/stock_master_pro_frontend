import type { SigmoideAsynType } from "../../types/alias/SigmoideAsynType";

type NumberInputSigmoid = number;

const sigmoidAsyn : SigmoideAsynType = async (n : NumberInputSigmoid) => {

    return new Promise(
        (resolve) : void => {
            setTimeout(() : void => {
                if (n !== undefined && n !== null) {
                    const res : number = 1 / (1 + Math.exp(-n));
                    return resolve(res)
                } else {
                    return resolve(0);
                }
            }, 500)
        }
    );
};

export default sigmoidAsyn;