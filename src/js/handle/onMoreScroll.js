// 스코롤 맨 밑까지 내리면 작동
// 5개가 추가되서 나타난다
// 지금 추가되는게 아니고 전체적으로 바뀌는 현상이 발생중

import {$} from "../utils/querySelector.js";
import {requestSearch} from "./onModalShow.js";
import {getURLQueryStringApplied} from "../utils/fetch.js";
import {MAX_RESULT_COUNT, PART_TYPE, REGION_CODE, SEARCH_TYPE_VIDEO} from "../constant.js";

export const renderScroll = ()=>{


    const $videoWrapper= $('.video-wrapper');
    const $keywordInput = $('#search-input').value;
    const url = getURLQueryStringApplied({

        // sinppet 개체에 있는 동영상 리소스를 반환합니다.
        part: PART_TYPE,
        // 검색어를 지정합니다.
        q: $keywordInput,
        // video
        type: SEARCH_TYPE_VIDEO,
        // 동영상 갯수
        maxResults: MAX_RESULT_COUNT,
        // 동영상 글 언어
        regionCode: REGION_CODE,
    });

    requestSearch(url);

};



export const onNextResults =(el)=>{





};
