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
    const saveBox = $('#save');

    if(getvideos !==null){
        const paresVideo =JSON.parse(getvideos);
        console.log(paresVideo);

        saveBox.innerHTML=`저장된 영상 갯수 : ${paresVideo.length}개`;
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
        videoTitle : target.dataset.videoTitel,
        channelId : target.dataset.channelId,
        channelTitle : target.dataset.channelId,
        publishedAt : target.dataset.publishedAt,
    }

    videoList.push(video);
}


