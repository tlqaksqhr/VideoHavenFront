<template>
    <video id="video" controls></video>
</template>

<script>

import Hls from 'hls.js';

export default {
  name: 'VideoPageView',
  components: {
  },
  mounted() {
    let videoID = this.$route.params.id;
    let video = document.getElementById('video');
    let videoSrc = `${process.env.VUE_APP_SERVER}/video/streaming/${videoID}/${videoID}.m3u8`;
    if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.autoplay = 'autoplay';
            video.playsinline = 'true';
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function () {
            video.autoplay = 'autoplay';
            video.playsinline = 'true';
            video.play();
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  video {
      position: fixed; right: 0; bottom: 0;
      min-width: 100%; min-height: 100%;
      width: auto; height: auto; z-index: -100;
      background-size: cover;
  }
</style>
