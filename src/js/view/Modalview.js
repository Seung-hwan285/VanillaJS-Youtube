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



// 2. 로딩 컴포넌트가 생기다가 2초정도 그리고 해당 검색 영상들이 나온다.
// -> 1초뒤에 로딩 컴포넌트 나오고있음
// -> 3초뒤에 로딩 컴포넌트 제거
// -> 해당 영상 출력
export const renderLoadingComponent=()=>{

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
    },3000);



}

export const renderLoadingVideo=()=>{


}