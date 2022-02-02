export const request = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
        });
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response.json();
    } catch (e) {
        console.error(e);
    }
};