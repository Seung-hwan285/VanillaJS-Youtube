
import {$} from "./utils/querySelector.js";
import {onModalClose, onModalShowOpen} from "./view/Modalview.js";
import {onSearchKeywordClick, renderSearchGroup} from "./handle/onModalShow.js";
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


    console.log($modalInner);
    $modalInner.addEventListener("scroll",(e)=>{


        // 해당 콘텐츠 높이와 다음 스크롤 위치 높이를 더하고 그 값이
        // 전체 모달창 높이보다 크거나 같다면 아래감지
        console.log($modalInner.offsetHeight + $modalInner.scrollTop);
        console.log($modalInner.scrollHeight);
        if(($modalInner.offsetHeight + $modalInner.scrollTop +1) >=$modalInner.scrollHeight){

            console.log('fds');
        }
    });


};



YoutubeClassRoom();