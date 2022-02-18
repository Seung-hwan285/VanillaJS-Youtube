
import {$} from "./utils/querySelector.js";
import {onModalClose, onModalShowOpen} from "./view/Modalview.js";
import {onSearchKeywordClick} from "./handle/onModalShow.js";
import {onSearchKeywordEnter} from "./handle/onModalShow.js";
import {onModalScroll} from "./handle/onModalScroll.js";
import {onModalSave} from "./handle/onModalSave.js";
import {renderWatched, renderWatching} from "./view/Homeview.js";
import {onHomeClipDelete,
} from "./handle/onHomeDelete.js";
import {onHomeWhacing} from "./handle/onHomeWhacing.js";
import {onHomeWhatched} from "./handle/onHomeWhatched.js";



const $searchKeyWordForm = $('#search-keyword-form');
const $searchBtn =$('#search-submit');
const $modalInner = $('.modal-inner');
// 여기에 값을 넣게 되면 body가 로드될때 같이 실행이 된다
const $homeVideo = $('.see-video-wrapper');
const $whatchedVideo =$('#watched-video');


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
    $modalInner.addEventListener("scroll",onModalScroll);
    // 저장버튼
    $('#search-result-video-wrapper').addEventListener("click",onModalSave);

    // 볼영상 버튼
    $('#watching-video').addEventListener("click",renderWatching);
    // 본영상 버튼
    $whatchedVideo.addEventListener("click",renderWatched);

    // 동영상 삭제 버튼
    $homeVideo.addEventListener("click",onHomeClipDelete);

    // 동영상 시청 완료 버튼
    $homeVideo.addEventListener("click",onHomeWhacing);

    // 본 영상 누르면 숨겨놨던 동영상 보여주기
    $whatchedVideo.addEventListener("click",onHomeWhatched);
};


window.onload=()=> {
    YoutubeClassRoom();
};

