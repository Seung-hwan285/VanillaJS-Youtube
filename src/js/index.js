import {$} from "./utils/querySelector.js";
import {onModalClose, onModalShowOpen} from "./view/Modalview.js";
import {onModelShow, search} from "./handle/onModalShow.js";


export const YoutubeClassRoom =()=>{

      $('#search-button').addEventListener("click",onModalShowOpen);
      $('.modal-close').addEventListener("click",onModalClose);
      $('#data-submit').addEventListener("click",onModelShow);

      search();


};


window.onload=()=>{
    YoutubeClassRoom();
}