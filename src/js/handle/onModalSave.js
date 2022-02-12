// [x] json객체로 데이터 가져오기
// [x] 로컬스토리지에 set으로 저장 -> 배열만들어서 저장 하기
// [x] 로컬스토리지 get으로 데이터 가져와보기
// [x] 저장개수 5개로 만들기
// [x]  저장개수가 초과하면 더이상 저장할수 없다고 에러메세지



import {getVideo, handlerVideoData, setVideo} from "../utils/localStorage.js";

export const onModalSave=(e)=>{

    handlerVideoData(e);

    const getvideos =localStorage.getItem('videoWatch');


    const parseVideo = JSON.parse(getvideos);

    if(parseVideo.length >=5){
        return;
    }
    setVideo();
    getVideo();
}







