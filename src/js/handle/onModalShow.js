import {$} from "../utils/querySelector.js";
import {renderRecentKeyword} from "../view/Modalview.js";


const $dataInput= $('#data-input');



const $searchKeywordForm = $('#search-keyword-form');
export const onModelShow=()=>{
    renderRecentKeyword($dataInput.value);

}


export const search=()=>{
    $searchKeywordForm.addEventListener("submit",()=>{
        alert("fdsa");
    });
}

