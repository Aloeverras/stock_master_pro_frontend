type NumberInput = number;
type ValidePaireAsyn = Promise<boolean>

const validePaireAsyn : (n : NumberInput) => ValidePaireAsyn= async (n : NumberInput) => {
    return n % 2 === 0;
};

export default validePaireAsyn;