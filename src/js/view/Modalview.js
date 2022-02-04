// TODO 검색 요구사항 다시 정리
// -[x] 최근 검색 키워드를 3개까지만 보여준다.
// -[x] 유투브검색 API로 내가 보고싶은 영상들이 나온다.
// -[x] 데이터를 불러올때는 로딩 컴포넌트가 나온다
// -[] 최초 검색 결과는 10개만 나오고 스크롤을 내릴때마다 더많은 영상들이 10개씩 추가한다.
    // 스크롤바 내리면 API를 새로 요청해야함
// -[] 검색한 영상들의 JSON 데이터를 WEB  Storage에 저장한다.


import {$, $$} from "../utils/querySelector.js";



const $modal = $('#search-section');


export const onModalShowOpen=()=>{

    $modal.classList.add('open');
};

export const onModalClose=()=>{

    $modal.classList.remove('open');

};

const recentKeywordLabel=()=>{
    return `<span class="text-gray-700" id="recent-keyword">최근 검색어:  </span>`;
};

const recentKeywordTemplate=(keyword)=>{

    return `<a class="chip">${keyword}</a>`;
};



const listKeyWord = []
export const renderRecentKeyword=(keyword)=>{

    listKeyWord.push(keyword);
    const $$recentKeyword =$$('.chip').length;
    console.log($$recentKeyword);

    if($$recentKeyword < 3){
        $('[data-js="search-modal_recent"]').innerHTML=
            recentKeywordLabel() + listKeyWord.map(recentKeywordTemplate).join("");
    }

};



// 각 동영상 템플릿 객체로 매개변수 받아주고 값추가함
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

export const renderSearchResult = (articlesInfo) => {
    const $videoWrapper = $('#search-result-video-wrapper');

    const $spinner = $('[data-js="search-modal_spinner"]');

    setTimeout(function (){
        $spinner.innerHTML=`<div class="relative spinner-container">
        <span class="material spinner"></span></div>`;
    },1000);

    setTimeout(function (){
        $spinner.innerHTML=``;
    },2000);

    setTimeout(function (){
        $videoWrapper.insertAdjacentHTML("beforeend",articlesInfo.map((articleInfo) => getSearchResultTemplate(articleInfo)).join(''));
    },2000);

};
