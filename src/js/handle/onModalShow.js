import {$} from "../utils/querySelector.js";
import {renderRecentKeyword} from "../view/Modalview.js";
import {
    MAX_RESULT_COUNT,
    PART_TYPE, REGION_CODE,
    SEARCH_TYPE_VIDEO,

} from "../constant.js"
import {API_KEY} from "../utils/api.js";
import {request} from "../utils/fetch.js";

const $keywordInput= $('#search-input');

const getURLQueryStringApplied = (queryStrings) => {
    const queryStringFlattened = Object.keys(queryStrings)
        .map((key) => `&${key}=${queryStrings[key]}`)
        .join('');
    console.log(queryStringFlattened);

    return `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`.concat(queryStringFlattened);
};

const processJSON = (rawData) => {
    return rawData.items.map((item) => ({
        videoId: item.id.videoId,
        videoTitle: item.snippet.title,
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
    }));

};

// 각 동영상 템플릿
const getSearchResultTemplate = ({ videoId, videoTitle, channelId, channelTitle, publishedAt }) => {
    return `
        <article class="clip">
        <div class="preview-container image">
          <iframe
            width="100%"
            height="118"
            src="https://www.youtube.com/embed/${videoId}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="content-container pt-2 px-1">
          <h3 class="video-title line">${videoTitle}</h3>
          <div class="channel-title line">
            <a
              href="https://www.youtube.com/channel/${channelId}"
              target="_blank"
              class="channel-name mt-1"
            >
              ${channelTitle}
            </a>
            <div class="published-at meta line">
              <p>${publishedAt}</p>
            </div>
            <div class="d-flex justify-end">
              <button class="save-button btn" 
              data-video-id="${videoId}"
              data-video-title="${videoTitle}"
              data-channel-id="${channelId}" 
              data-channel-title="${channelTitle}"
              data-published-at="${publishedAt}"
              >⬇️ 저장</button>
            </div>
          </div>
        </div>
      </article>
    `;
};


const renderSearchResult = (articlesInfo) => {
    const $videoWrapper = document.querySelector('#search-result-video-wrapper');

    const $spinner = $('[data-js="search-modal_spinner"]');

    setTimeout(function (){
        $spinner.innerHTML=`<div class="relative spinner-container">
        <span class="material spinner"></span></div>`;
    },1000);

    setTimeout(function (){
        $spinner.innerHTML=``;
    },2000);

    setTimeout(function (){
        $videoWrapper.innerHTML = articlesInfo.map((articleInfo) => getSearchResultTemplate(articleInfo)).join('');
    },2000);

};



export const onSearchKeywordClick=()=>{

    const $keywordInput = $('#search-input').value;
    const url = getURLQueryStringApplied({

        // sinppet 개체에 있는 동영상 리소스를 반환합니다.
        part: PART_TYPE,
        // 검색어를 지정합니다.
        q:$keywordInput,

        // video
        type: SEARCH_TYPE_VIDEO,
        // 동영상 갯수
        maxResults: MAX_RESULT_COUNT,
        // 동영상 글 내용
        regionCode: REGION_CODE,

    });



    request(url)
        .then((response) => {
            console.log(response);
            return processJSON(response);
        })
        .then((articlesInfo) => renderSearchResult(articlesInfo))
        .catch((error) => console.error(error));

    renderRecentKeyword($keywordInput);
}



export const onSearchKeywordEnter = (e) => {

    const $keywordInput = $('#search-input').value;
    e.preventDefault();


    const url = getURLQueryStringApplied({

        // sinppet 개체에 있는 동영상 리소스를 반환합니다.
        part: PART_TYPE,
        // 검색어를 지정합니다.
        q: $keywordInput,
        // video
        type: SEARCH_TYPE_VIDEO,
        // 동영상 갯수
        maxResults: MAX_RESULT_COUNT,
        // 동영상 글 언어
        regionCode: REGION_CODE,

    });

    console.log(url);


    request(url)
        .then((response) => {
            return processJSON(response);
        })
        .then((articlesInfo) => renderSearchResult(articlesInfo))
        .catch((error) => console.error(error));

    renderRecentKeyword($keywordInput);

};