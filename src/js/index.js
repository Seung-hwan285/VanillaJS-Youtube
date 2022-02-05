
import {$} from "./utils/querySelector.js";
import {onModalClose, onModalShowOpen} from "./view/Modalview.js";
import {onSearchKeywordClick} from "./handle/onModalShow.js";
import {onSearchKeywordEnter} from "./handle/onModalShow.js";
import {onMoreScroll} from "./handle/onMoreScroll.js";



const $searchKeyWordForm = $('#search-keyword-form');
const $searchBtn =$('#search-submit');

const $modalInner = $('.modal-inner');
export const YoutubeClassRoom =()=>{


    $('#search-button').addEventListener("click",onModalShowOpen);
    $('.modal-close').addEventListener("click",onModalClose);

    // Enter키로 동영상 검색
    $searchKeyWordForm.addEventListener("submit",onSearchKeywordEnter);

    // Click으로 동영상 검색
    $searchBtn.addEventListener("click",onSearchKeywordClick);

    // 스크롤 내리면 클립 영상 추가
    $modalInner.addEventListener("scroll",onMoreScroll);


};



YoutubeClassRoom();