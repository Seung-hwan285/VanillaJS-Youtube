import {getVideo, handlerVideoData, setVideo} from "../utils/localStorage.js";
import {$} from "../utils/querySelector.js";
import {paintWatcingVideo} from "../view/Homeview.js";
import {onHomeClipDelete} from "./onHomeDelete.js";


export const onModalSave=(e)=>{

    setVideo();
    let getvideos =localStorage.getItem('videoWatch');


    const parseVideo = JSON.parse(getvideos);
    const $saveBox = $('#save');

    $saveBox.innerHTML=`저장된 영상 갯수 : ${parseVideo.length}개`


    // 로컬스토리지 저장갯수가 5개 이상이거나 5개이면 에러메세지 표시하고 더이상 저장안되게
    if(parseVideo.length >=5){
        getVideo();
    }

    else{
        $saveBox.innerHTML=`저장된 영상 갯수 : ${parseVideo.length}개`;
        let localVideoData=handlerVideoData(e);

        paintWatcingVideo(localVideoData);
        setVideo();
    }

}








