// [x] json객체로 데이터 가져오기
// [x] 로컬스토리지에 set으로 저장 -> 배열만들어서 저장 하기
// [x] 로컬스토리지 get으로 데이터 가져와보기
// [] 저장개수 5개로 만들기 -> 만약 저장개수가 초과하면 더이상 저장할수 없다고 에러메세지


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
    if(getvideos !==null){
        const paresVideo =JSON.parse(getvideos);
        console.log(paresVideo);
    }
    console.log(getvideos);
}
