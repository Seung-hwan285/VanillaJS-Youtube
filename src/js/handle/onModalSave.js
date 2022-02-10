// [x] json객체로 데이터 가져오기
// [x] 로컬스토리지에 set으로 저장 -> 배열만들어서 저장 하기




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


    setTodos();
}


const setTodos=()=>{
    localStorage.setItem("videoWatch",JSON.stringify(videoList));
}