import {$} from "../utils/querySelector.js";
import {nextPage, renderSearchGroup, requestSearch} from "./onModalShow.js";



const $modalInner = $('.modal-inner');


// 클립 영상이 새로 추가되야함
// renderSearchGroup을 호출하면 같은 클립 영상들이 호출이 된다.

export const onMoreScroll=()=>{

    const $keywordInput = $('#search-input').value;
    if(($modalInner.offsetHeight + $modalInner.scrollTop +1) >=$modalInner.scrollHeight
    && $keywordInput !==""){

        nextPage();

    }

}