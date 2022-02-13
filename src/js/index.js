
import {$} from "./utils/querySelector.js";
import {onModalClose, onModalShowOpen} from "./view/Modalview.js";
import {onSearchKeywordClick} from "./handle/onModalShow.js";
import {onSearchKeywordEnter} from "./handle/onModalShow.js";
import {onMoreScroll} from "./handle/onMoreScroll.js";
import {onModalSave} from "./handle/onModalSave.js";
import {setVideo} from "./utils/localStorage.js";
import {renderersEmpty} from "./view/Homeview.js";



const $searchKeyWordForm = $('#search-keyword-form');
const $searchBtn =$('#search-submit');

const $modalInner = $('.modal-inner');

// 여기에 값을 넣게 되면 body가 로드될때 같이 실행이 된다


export const YoutubeClassRoom =()=>{

    $('#search-button').addEventListener("click",onModalShowOpen);
    $('.modal-close').addEventListener("click",onModalClose);

    // Enter키로 동영상 검색
    $searchKeyWordForm.addEventListener("submit",onSearchKeywordEnter);

    // Click으로 동영상 검색
    $searchBtn.addEventListener("click",onSearchKeywordClick);

    //지금 save-button을 못찾고있는 것 같다.
    // 동영상 검색을 해야 save-button 이 추가 되기때문에 미리 가져오게 되면 당연히 값을 못찾는다.

    // 스크롤 내리면 클립 영상 추가
    $modalInner.addEventListener("scroll",onMoreScroll);


    // 저장버튼
    $('#search-result-video-wrapper').addEventListener("click",onModalSave);

    // 볼영상 페이지로 이동
    $('#watch-video').addEventListener("click",renderersEmpty);
};


window.onload=()=>{
    YoutubeClassRoom();

}

