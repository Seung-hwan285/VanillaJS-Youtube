// 스코롤 맨 밑까지 내리면 작동
// 5개가 추가되서 나타난다
// 지금 추가되는게 아니고 전체적으로 바뀌는 현상이 발생중


export const onMoreScroll=(e)=>{


    if(e.scrollHeight -  e.scrollTop === e.clientHeight){
        return;
    }

    else{
        console.log(e.target);
    }



}