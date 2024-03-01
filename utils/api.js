export const getProducts = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    try {
        const response = await fetch("https://fakestoreapi.com/products", options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
