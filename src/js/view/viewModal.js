import {$} from "../utils/querySelector.js";

const $modal = $('[data-youtube="search-modal"]');


export const onModalShow=()=>{
    
    $modal.classList.add('open');
}

export const onModalClose=()=>{

    $modal.classList.remove('open');

}