import {$} from "../utils/querySelector.js";
import {renderLoadingComponent, renderRecentKeyword} from "../view/Modalview.js";


const $dataInput= $('#data-input');




export const onModelShow=()=>{
    renderRecentKeyword($dataInput.value);
    renderLoadingComponent();
}