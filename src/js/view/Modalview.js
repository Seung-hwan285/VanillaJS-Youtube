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
}