// TODO 검색 요구사항 다시 정리
// -[] 최근 검색 키워드를 3개까지만 보여준다.
// -[] 유투브검색 API로 내가 보고싶은 영상들이 나온다.
// -[] 데이터를 불러올때는 로딩 컴포넌트가 나온다
// -[] 검색 결과가 없으면 이미지를 통해서 없다고 나온다
// -[] 최초 검색 결과는 10개만 나오고 스크롤을 내릴때마다 더많은 영상들이 10개씩 추가한다.
    // 스크롤바 내리면 API를 새로 요청해야함
// -[] 검색한 영상들의 JSON 데이터를 WEB  Storage에 저장한다.


import {$} from "../utils/querySelector.js";


const $modal = $('#search-section');


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




    $('[data-js="search-modal_recent"]').innerHTML=
        recentKeywordLabel() + listKeyWord.map(recentKeywordTemplate).join("");

};

