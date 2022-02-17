import {$} from "../utils/querySelector.js";
import {videoList} from "../utils/localStorage.js";
import {CHECKED, WATCHING} from "../constant.js";


const getSavedVideoTemplate = ({videoId,videoTitle,channelId,channelTitle,publishedAt},className)=>{
    return `
        <article id=${videoId} class="watching">
        <div class="preview-container image">
          <iframe
            id="fram"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/${videoId}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="content-container pt-2 px-1">
          <h3 class="video-title line">${videoTitle}</h3>
          <div class="channel-title line">
            <a
              href="https://www.youtube.com/channel/${channelId}"
              target="_blank"
              class="channel-name mt-1"
            >
              ${channelTitle}
            </a>
            <div class="published-at meta line">
              <p>${publishedAt}</p>
            </div>
            <div class="d-flex justify-end">
              <button id="save-btn" class="save-button check-button" 
              > ✅ ️ 시청완료</button>
              
              <button id="delete-btn" class="delete-button check-button">
              🗑️ 제거
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
};

const addlocal = ()=>{

    const getVideos = localStorage.getItem("videoWatch");


    videoList=JSON.parse(getVideos);

}

export const paintWatcingVideo=(localVideoData)=> {

    const $homeVideoWrapper = $('.see-video-wrapper');

    const lastValue = localVideoData[localVideoData.length - 1];

    $homeVideoWrapper.insertAdjacentHTML("beforeend", getSavedVideoTemplate(lastValue));


};

export const renderWatching =()=>{

    const $watchingButton = $('#watching-video');
    const $watchedButton =$('#watched-video');


    $watchingButton.classList.add('bg-cyan-100');
    $watchedButton.classList.remove('bg-cyan-100');
};

export const renderWatched=()=>{
    const $watchedButton =$('#watched-video');
    const $watchingButton =$('#watching-video');


    $watchedButton.classList.add('bg-cyan-100');
    $watchingButton.classList.remove('bg-cyan-100');
}

