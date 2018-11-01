class Buffer {

  constructor(ctx, urls) {
    this.ctx = ctx;
    this.urls = urls;
    this.buffer = [];
  }

  loadSound(url, idx) {
    let request = new XMLHttpRequest();
    request.open('get', url, true);
    request.responseType = 'arraybuffer';
    let thisBuffer = this;
    request.onload = () => {
      thisBuffer.ctx.decodeAudioData(request.response, (buffer) => {
        thisBuffer.buffer[idx] = buffer;
        updateProgress(thisBuffer.urls.length);
        if (idx == thisBuffer.urls.length - 1) {
          thisBuffer.loaded();
        }
      });
    };
    request.send();
  };

  loadAll() {
    this.urls.forEach((url, idx) => {
      this.loadSound(url, idx);
    })
  }

  loaded() {
    // what happens when all the files are loaded
  }

  getSoundByIndex(idx) {
    return this.buffer[idx];
  }

}