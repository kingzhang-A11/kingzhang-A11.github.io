window.onload = function () {
    AFRAME.registerComponent('videohandler', {
      init: function () {
        var marker = this.el;

        this.vid = document.querySelector("#vid");

        marker.addEventListener('markerFound', function () {
          // 识别到标识图，开始播放视频
          this.vid.play();
        }.bind(this));

        marker.addEventListener('markerLost', function () {
          // 丢失标识图，停止播放视频
          this.vid.pause();
          this.vid.currentTime = 0;
        }.bind(this));
      }
    });
  };