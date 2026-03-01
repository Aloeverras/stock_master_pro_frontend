const correctHTML = async (balise : HTMLElement | null) : Promise<boolean> => {
    try {
        return new Promise(
        (resolve : (value : boolean) => void) => {
            if (balise === null) {
                resolve(false);
            } else {
                resolve(true);
            }
        }
        );
    } catch (error : unknown) {
        console.error(error);
        return false;
    } 
};

export default correctHTML;