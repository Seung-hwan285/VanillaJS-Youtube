import {$} from "../utils/querySelector.js";



const getSavedVideoTemplate = ({videoId,videoTitle,channelId,channelTitle,publishedAt})=>{
    return `
        <article class="watching">
        <div class="preview-container image">
          <iframe
            width="100%"
            height="118"
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
              <button class="save-button btn" 
              data-video-id="${videoId}"
              data-video-title="${videoTitle}"
              data-channel-id="${channelId}" 
              data-channel-title="${channelTitle}"
              data-published-at="${publishedAt}"
              >⬇️ 저장</button>
            </div>
          </div>
        </div>
      </article>
    `;
};


export const renderersEmpty=(localVideoData)=>{
    const $homeVideoWrapper = $('.see-video-wrapper');
    console.log(localVideoData);
    $homeVideoWrapper.insertAdjacentHTML("beforeend",localVideoData.map((localVideoData)=>getSavedVideoTemplate(localVideoData)));
}


