import {$} from "./utils/querySelector.js";
import {onModalClose, onModalShowOpen, renderLoadingComponent} from "./view/Modalview.js";
import {onModelShow} from "./handle/onModalShow.js";


export const YoutubeClassRoom =()=>{

  $('#search-button').addEventListener("click",onModalShowOpen);
  $('.modal-close').addEventListener("click",onModalClose);
  $('#data-submit').addEventListener("click",onModelShow);
  renderLoadingComponent();
};


window.onload=()=>{
    YoutubeClassRoom();
}