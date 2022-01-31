import {API_KEY} from "./api.js";

const URL = `https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=`;
export const request = async (keyword)=> {

        try{
            const response = await fetch(url,{
                method : 'GET',
            });


            if(!response.ok){
                throw Error(response.statusText);
            }

            return response.json();
        }catch (e) {
            console.error(e);
        }

};
