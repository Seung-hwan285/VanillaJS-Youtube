import {API_KEY} from "./api.js";

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


export const getURLQueryStringApplied = (queryStrings) => {
    // 키값들을 가져옴
    const queryString = Object.keys(queryStrings)
        .map((key)=>`&${key}=${queryStrings[key]}`)
        .join('');
    return `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`.concat(queryString);
};


