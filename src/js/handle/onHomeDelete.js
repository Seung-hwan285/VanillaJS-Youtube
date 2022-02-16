import {$} from "../utils/querySelector.js";
import {setVideo, setVideoFilter, videoList} from "../utils/localStorage.js";


export const onHomeClipDelete=(e)=>{

    const target =e.target;

    // 시청완료 , 제거 버튼만 동작되게
    if(!target.classList.contains('check-button')){
        return;
    }
    const video =target.closest('article');


    if(target.classList.contains('delete-button')){

        // 로컬스토리지는 비디오 아이디에 맞춰서 삭제 해주기
        // 1. 비디오 아이디를 가져온다
        // 2. fiter를 통해서 로컬스토리지 videoid와 삭제되는 videoid가 다른것만 배열에 저장한다
        // 즉 같은 videoid는 삭제
        video.parentNode.removeChild(video);

        const getVideos = localStorage.getItem('videoWatch');

        // 전체 로컬스토리지
        let parseVideo = JSON.parse(getVideos);



        const videoId =video.id;
        console.log(videoId);
        parseVideo=parseVideo.filter((clip)=>clip.videoId !== videoId);
        setVideoFilter(parseVideo);
    }
};


const removeVideo =(videoId)=>{
    deleteTargetItemByKey('videoWatch','videoId',videoId);
}

const deleteTargetItemByKey=(key,secondKey,value)=> {
    const list =getListBykey(key);

    console.log(list);
}

const getListBykey=(key)=>{


    try{
        return JSON.parse(localStorage.getItem(key)) || [];
    }catch(e){
        return [];
    }

}