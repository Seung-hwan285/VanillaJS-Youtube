import {$} from "../utils/querySelector.js";

export const onHomeWhatched=()=>{
    const $homeVideoWrapper = $('.see-video-wrapper');
    const childrenCollection = $homeVideoWrapper.children;

    for(let i=0; i<childrenCollection.length; i++){
        console.log(childrenCollection[i]);
        childrenCollection[i].classList.add('show');
    }

}
