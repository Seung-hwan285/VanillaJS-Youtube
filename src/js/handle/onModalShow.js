import {$} from "../utils/querySelector.js";
import {renderRecentKeyword, renderSearchResult} from "../view/Modalview.js";
import {getURLQueryStringApplied, request} from "../utils/fetch.js";
import {MAX_RESULT_COUNT, PART_TYPE, REGION_CODE, SEARCH_TYPE_VIDEO} from "../constant.js";


const processJSON = (rawData) => {
    // 각 동영상에 맞는 데이터를 반환
    return rawData.items.map((item)=>({
        videoId : item.id.videoId,
        videoTitle : item.snippet.title,
        channelId : item.snippet.channelId,
        channelTitle : item.snippet.channelTitle,
        publishedAt : item.snippet.publishedAt,
    }));
};


export const requestSearch =(url)=>{
    request(url)
        .then((response)=>{
            return processJSON(response);
        })
        .then((articleInfo)=>renderSearchResult(articleInfo))
        .then((error)=>console.log(error));
};



export const renderSearchGroup=()=>{

    return `      <article class="clip">
            <div class="preview-container">
              <iframe
                      width="100%"
                      height="118"
                      src="https://www.youtube.com/embed/Ngj3498Tm_0"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
              ></iframe>
            </div>
            <div class="content-container pt-2 px-1">
              <h3>아두이노 무드등</h3>
              <div>
                <a
                        href="https://www.youtube.com/channel/UC-mOekGSesms0agFntnQang"
                        target="_blank"
                        class="channel-name mt-1"
                >
                  메이커준
                </a>
                <div class="meta">
                  <p>2021년 3월 2일</p>
                </div>
                <div>
                  <span class="opacity-hover">✅</span>
                  <span class="opacity-hover">👍</span>
                  <span class="opacity-hover">💬</span>
                  <span class="opacity-hover">🗑️</span>
                </div>
              </div>
            </div>
          </article>`;
    // const $keywordInput = $('#search-input').value;
    // const url = getURLQueryStringApplied({
    //
    //     // sinppet 개체에 있는 동영상 리소스를 반환합니다.
    //     part: PART_TYPE,
    //     // 검색어를 지정합니다.
    //     q: $keywordInput,
    //     // video
    //     type: SEARCH_TYPE_VIDEO,
    //     // 동영상 갯수
    //     maxResults: MAX_RESULT_COUNT,
    //     // 동영상 글 언어
    //     regionCode: REGION_CODE,
    //
    // });
    // requestSearch(url);
}



export const onSearchKeywordClick=()=>{
    const $keywordInput = $('#search-input').value;
    renderSearchGroup();
    renderRecentKeyword($keywordInput);
}

export const onSearchKeywordEnter = (e) => {
    const $keywordInput = $('#search-input').value;
    e.preventDefault();
    renderSearchGroup();
    renderRecentKeyword($keywordInput);

};

