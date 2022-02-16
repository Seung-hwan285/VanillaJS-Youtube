export const onHomeSave=(e)=>{

    const target = e.target;


    if(!target.classList.contains('check-button')){
        return;
    }

    const video =target.closest('article');



    if(target.classList.contains('save-button')){
        console.log(video);
    }


};