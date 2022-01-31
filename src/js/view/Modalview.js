import {$, $$} from "../utils/querySelector.js";
import {request} from "../utils/fetch.js";
import {API_KEY} from "../utils/api.js";

const $modal = $('[data-youtube="search-modal"]');


export const onModalShowOpen=()=>{

    $modal.classList.add('open');
};

export const onModalClose=()=>{

    $modal.classList.remove('open');

};

const recentKeywordLabel=()=>{
    return `<span class="text-gray-700">최근 검색어:  </span>`;
};

const recentKeywordTemplate=(keyword)=>{

    return `<a class="chip">${keyword}</a>`;
};

const listKeyWord = []
export const renderRecentKeyword=(keyword)=>{


    listKeyWord.push(keyword);

    console.log(listKeyWord);
    listKeyWord.map(item => console.log(item));
    $('[data-youtube="search-modal_recent"]').innerHTML=
        recentKeywordLabel() + listKeyWord.map(recentKeywordTemplate).join("");
};







export const getSearchResultTemplate =({videoId,chanelId,channelTitle,publishedAt})=>{

    const $spinner = $('[data-youtube="search-modal_spinner"]');
    const $video = $('[data-youtube="search-video"]');


    setTimeout(function (){
      $spinner.innerHTML=`<div class="relative spinner-container">
        <span class="material spinner"></span></div>`;
  },1000);


    setTimeout(function () {
        $spinner.innerHTML=``;
    },3000);


    setTimeout(function () {
        $video.innerHTML=`        <article class="clip">
                <div class="preview-container">
                  <iframe
                    width="100%"
                    height="118"
                    src="https://www.youtube.com/embed/${videoId}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="content-container pt-2 px-1">
                  <h3>아두이노 무드등</h3>
                  <div>
                    <a
                      href="https://www.youtube.com/channel/${chanelId}"
                      target="_blank"
                      class="channel-name mt-1"
                    >
                      ${channelTitle}
                    </a>
                    <div class="meta">
                      <p>${publishedAt}</p>
                    </div>
                    <div class="d-flex justify-end">
                      <button class="btn">⬇️ 저장</button>
                    </div>
                  </div>
                </div>
              </article>`;
    },3000);

}


const renderSearchResult = (articcleInfo)=>{
    const $videoWrapper = $('#search-result-video-wrapper');
    $videoWrapper.innerHTML = articcleInfo.map((articcleInfo)=>getSearchResultTemplate(articcleInfo)).join("");
}
const processJSON = (rawData) => {
    return rawData.items.map((item) => ({
        videoId: item.id.videoId,
        videoTitle: item.snippet.title,
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
    }));

}


const getURLQueryStringApplied=(queryString)=>{

    const queryStringFlag = Object.keys(queryString)
        .map((key)=>`&${key}=${queryString[key]}`)
        .join('');

    return `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`.concat(queryStringFlag);
};


export const onSearchKeyword =(e)=>{
    const url = getURLQueryStringApplied({
        part: 'snippet',
        q: e.target.elements['search-keyword-input'].value,
        type: 'video',
        maxResults: 10,
        regionCode: 'KR',
    });


    request(url)
        .then((response) => {
            return processJSON(response);
        })
        .then((articlesInfo) => renderSearchResult(articlesInfo))
        .catch((error) => console.error(error));
};
