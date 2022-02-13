import {$} from "./querySelector.js";
import {STORAGE_FULL} from "../constant.js";

const localFull = $('#storage-full');
const videoList =[];

const classListToAdd =()=>{
    localFull.classList.add('show');
}

const classListToRemove =()=>{
    setTimeout(()=>{
        localFull.classList.remove('show');
    },2000);
}

export const setVideo=()=>{


    localStorage.setItem("videoWatch",JSON.stringify(videoList));
}

export const getVideo=()=>{

    const getvideos=localStorage.getItem("videoWatch");

    if(getvideos !==null){
        const paresVideo =JSON.parse(getvideos);


        if(paresVideo.length >=5){
            classListToAdd();
            // 에러메시지 창
            localFull.innerText=STORAGE_FULL;
            classListToRemove();
        }
    }
}

export const handlerVideoData =(e)=>{

    const target = e.target;


    const video ={
        videoId : target.dataset.videoId,
        videoTitle : target.dataset.videoTitle,
        channelId : target.dataset.channelId,
        channelTitle : target.dataset.channelTitle,
        publishedAt : target.dataset.publishedAt,
    }

    videoList.push(video);

    return videoList;
}


export const getTargetVideoData =(targetId)=>{
    return videoList.find((video)=>video.videoId ===targetId);
}


