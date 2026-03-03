const assynIsNumber = async (n : number = 0) : Promise<boolean> => {
    const TEST : boolean = await n > 0;

    try {
        if (TEST) {
            return TEST;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
    

};

export default assynIsNumber;