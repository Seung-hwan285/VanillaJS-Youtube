import {$} from "../utils/querySelector.js";

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


// 1. 검색 버튼 누르면 로딩 컴포넌트가 나와야한다.
// -> video-wrapper 부분 건들면 될 것 같음
// -> clip 부분 따로 빼서 video-wrappe로 로딩컴포넌트 보여주고 나오게 해보자

// 2. 로딩 컴포넌트가 생기다가 2초정도 그리고 해당 검색 영상들이 나온다.

export const renderLoadingComponent=()=>{

    const $spinner = $('[data-youtube="search-modal_spinner"]');



  setTimeout(function (){
      $spinner.innerHTML=`<div class="relative spinner-container">
        <span class="material spinner"></span></div>`;
  },2000);




}

export const renderLoadingVideo=()=>{
    const $video = $('[data-youtube="search-video"]');

    $video.innerHTML=`        <article class="clip">
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
                    <div class="d-flex justify-end">
                      <button class="btn">⬇️ 저장</button>
                    </div>
                  </div>
                </div>
              </article>`;
}