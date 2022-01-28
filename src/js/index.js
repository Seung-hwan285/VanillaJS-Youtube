import {$} from "./utils/querySelector.js";
import {onModalClose, onModalShow} from "./view/viewModal.js";

export const YoutubeClassRoom =()=>{

  $('#search-button').addEventListener("click",onModalShow);
  $('.modal-close').addEventListener("click",onModalClose);

};


window.onload=()=>{
    YoutubeClassRoom();
}