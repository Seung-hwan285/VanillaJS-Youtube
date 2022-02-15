import {$} from "../utils/querySelector.js";
import {setVideo, videoList} from "../utils/localStorage.js";


export const onHomeClipDelete=(e)=>{

    const target =e.target;

    const li = target.parentNode;

    console.log(li);
    // 시청완료 , 제거 버튼만 동작되게
    if(!target.classList.contains('check-button')){
        return;
    }


    if(target.classList.contains('delete-button')){
        const video =target.closest('article');

        // 로컬스토리지는 비디오 아이디에 맞춰서 삭제 해주기
        // 1. 비디오 아이디를 가져온다
        // 2. fiter를 통해서 로컬스토리지 videoid와 삭제되는 videoid가 다른것만 배열에 저장한다
        // 즉 같은 videoid는 삭제
        video.parentNode.removeChild(video);

        const getVideos = localStorage.getItem('videoWatch');
        const parseVideo = JSON.parse(getVideos);

        // 안에 있는 로컬스토리지 데이터 전부 나옴
        parseVideo.forEach((clip)=>console.log(clip.videoId));

        
        setVideo();
    }
};
