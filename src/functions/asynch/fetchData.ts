const fetchData = async (url : string) : Promise<void> => {
    const response : Response = await fetch(url);
    const data : unknown = await response.json();

    try {
        console.log(data);
    } catch (e : unknown) {
        console.error(e)
    };
    
}

export default fetchData;