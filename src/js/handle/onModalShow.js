import {$} from "../utils/querySelector.js";
import {renderRecentKeyword, renderSearchResult} from "../view/Modalview.js";
import {getURLQueryStringApplied, request} from "../utils/fetch.js";
import {
    MAX_RESULT_COUNT,
    PART_TYPE,
    REGION_CODE,
    SEARCH_TYPE_VIDEO
} from "../constant.js";



let nextPageToken ='';
const processJSON = (rawData) => {


    nextPageToken=rawData.nextPageToken;


    return rawData.items.map((item)=>({
        videoId : item.id.videoId,
        videoTitle : item.snippet.title,
        channelId : item.snippet.channelId,
        channelTitle : item.snippet.channelTitle,
        publishedAt : item.snippet.publishedAt,

    }));
};


export const nextPage =()=>{

    const $keywordInput = $('#search-input').value;

    const url =getURLQueryStringApplied({

        part : PART_TYPE,
        q:  $keywordInput,
        type : SEARCH_TYPE_VIDEO,
        maxResults : 2,
        regionCode: REGION_CODE,
        pageToken: nextPageToken,
    });

    requestSearch(url);
    nextPageToken='';
}

export const requestSearch =(url)=>{


    request(url)
        .then((response)=>{
            return processJSON(response);
        })
        .then((articleInfo)=>renderSearchResult(articleInfo))
        .then((error)=>console.log(error));
};





export const renderSearchGroup=()=>{
    const pagetToken ="";
    const $keywordInput = $('#search-input').value;
    const url = getURLQueryStringApplied({


        part: PART_TYPE,

        q: $keywordInput,

        type: SEARCH_TYPE_VIDEO,

        maxResults: MAX_RESULT_COUNT,

        regionCode: REGION_CODE,


    });
    requestSearch(url);
}



export const onSearchKeywordClick=()=>{
    const $keywordInput = $('#search-input').value;
    renderSearchGroup();
    renderRecentKeyword($keywordInput);
};



export const onSearchKeywordEnter = (e) => {
    const $keywordInput = $('#search-input').value;
    e.preventDefault();
    renderSearchGroup();
    renderRecentKeyword($keywordInput);

};
