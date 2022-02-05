import {$} from "../utils/querySelector.js";
import {renderSearchGroup} from "./onModalShow.js";

const $modalInner = $('.modal-inner');
export const onMoreScroll=()=>{


    const valueInput = $('#search-input').value;
    if(($modalInner.offsetHeight + $modalInner.scrollTop +1) >=$modalInner.scrollHeight
    && valueInput !==""){


        // 클립 영상이 새로 추가되야함
        // renderSearchGroup을 호출하면 같은 클립 영상들이 호출이 된다.
        //renderSearchGroup();
        renderSearchGroup();

    }

}