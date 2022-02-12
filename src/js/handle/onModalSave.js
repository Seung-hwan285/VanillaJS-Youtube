// [x] json객체로 데이터 가져오기
// [x] 로컬스토리지에 set으로 저장 -> 배열만들어서 저장 하기
// [x] 로컬스토리지 get으로 데이터 가져와보기
// [x] 저장개수 5개로 만들기
// [x]  저장개수가 초과하면 더이상 저장할수 없다고 에러메세지


import {STORAGE_FULL} from "../constant.js";
import {$} from "../utils/querySelector.js";

const videoList =[];

export const onModalSave=(e)=>{

    const target = e.target;


    const video ={
        videoId : target.dataset.videoId,
        videoTitle : target.dataset.videoTitel,
        channelId : target.dataset.channelId,
        channelTitle : target.dataset.channelId,
        publishedAt : target.dataset.publishedAt,
    }

    videoList.push(video);

    setVideo();
    getVideo();

}

const setVideo=()=>{
    localStorage.setItem("videoWatch",JSON.stringify(videoList));
}


const getVideo=()=>{

    const getvideos=localStorage.getItem("videoWatch");
    const localFull = $('#storage-full');
    const saveBox = $('#save');
    if(getvideos !==null){
        const paresVideo =JSON.parse(getvideos);
        console.log(paresVideo.length);

        saveBox.innerHTML=`저장된 영상 갯수 : ${paresVideo.length}개`;
        if(paresVideo.length >=5){

            // 에러메시지 창
            localFull.innerText=STORAGE_FULL;
            localFull.classList.add('show');

            setTimeout(()=>{
               localFull.classList.remove('show');
            },2000);
        }
    }
}
