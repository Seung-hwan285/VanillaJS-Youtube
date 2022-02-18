import {WAHTCED, WATCHING} from "../constant.js";
import {$} from "../utils/querySelector.js";

export const onHomeSave=(e)=>{

    const target = e.target;


    if(!target.classList.contains('check-button')){
        return;
    }

    const video =target.closest('article');


    //시청완료 버튼 클릭
    if(target.classList.contains('save-button')){

        const videoId = video.id;
        movieVideo(videoId);
        paintWhatcedVideo(video);

    }


};

// 본 영상에도 동영상 들어가는 현상
// 본 영상은 추가되면 안된다.



const paintWhatcedVideo=(video)=>{

    // 비디오 봤는지 안봤는지 toggle로 구별
    const $homeVideoWrapper = $('.see-video-wrapper');

    video.classList.toggle('checked');


    // 만약 whatched이면 신청버튼 누른거 -> 본 영상에 나오게
    if(video.classList.contains(WAHTCED)){
                    
    }

}


const movieVideo =(videoId)=>{

    const getVideos = localStorage.getItem("videoWatch");

    let parseVideo = JSON.parse(getVideos);

    const target = parseVideo.find((video)=>video.videoId ===videoId);

}