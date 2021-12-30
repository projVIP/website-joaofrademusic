const fetchData = async () => {
    try {
        const response = await fetch('/assets/website-data.json');
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

export default{
    fetchData: fetchData()
}