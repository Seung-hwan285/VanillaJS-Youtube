import {CHECKED, WAHTCED, WATCHING} from "../constant.js";
import {$} from "../utils/querySelector.js";

export const onHomeWhacing=(e)=>{

    const target = e.target;


    if(!target.classList.contains('check-button')){
        return;
    }

    const video =target.closest('article');

    //시청완료 버튼 클릭
    if(target.classList.contains('save-button')){
        paintWhatcingVideo(video);

    }



};


const paintWhatcingVideo=(video)=>{

    // 비디오 봤는지 안봤는지 toggle로 구별

    const $homeVideoWrapper = $('.see-video-wrapper');

    video.classList.toggle('checked');

    // 만약 whatched이면 신청버튼 누른거 -> 볼 영상 숨김 , 본 영상에 나오게
    if(video.classList.contains(CHECKED)){

    }

}
