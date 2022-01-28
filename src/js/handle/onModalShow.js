import {$} from "../utils/querySelector.js";
import {renderRecentKeyword} from "../view/Modalview.js";


const $dataInput= $('#data-input');




export const onModelShow=()=>{
    renderRecentKeyword($dataInput.value);
}