
import {$} from "./utils/querySelector.js";
import {onModalClose, onModalShowOpen} from "./view/Modalview.js";
import {onSearchKeywordClick} from "./handle/onModalShow.js";
import {onSearchKeywordEnter} from "./handle/onModalShow.js";


const clipTemplate =()=>{
    return `<article class="clip">
            <div class="preview-container">
              <iframe
                      width="100%"
                      height="118"
                      src="https://www.youtube.com/embed/Ngj3498Tm_0"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
              ></iframe>
            </div>
            <div class="content-container pt-2 px-1">
              <h3>아두이노 무드등</h3>
              <div>
                <a
                        href="https://www.youtube.com/channel/UC-mOekGSesms0agFntnQang"
                        target="_blank"
                        class="channel-name mt-1"
                >
                  메이커준
                </a>
                <div class="meta">
                  <p>2021년 3월 2일</p>
                </div>
                <div>
                  <span class="opacity-hover">✅</span>
                  <span class="opacity-hover">👍</span>
                  <span class="opacity-hover">💬</span>
                  <span class="opacity-hover">🗑️</span>
                </div>
              </div>
            </div>
          </article>`;
}
export const YoutubeClassRoom =()=>{
    const $searchKeyWordForm = $('#search-keyword-form');
    const $searchBtn =$('#search-submit');
    const $modalInner = $('.modal-inner');

    $('#search-button').addEventListener("click",onModalShowOpen);
    $('.modal-close').addEventListener("click",onModalClose);

    // Enter키로 동영상 검색
    $searchKeyWordForm.addEventListener("submit",onSearchKeywordEnter);

    // Click으로 동영상 검색
    $searchBtn.addEventListener("click",onSearchKeywordClick);



};

YoutubeClassRoom();