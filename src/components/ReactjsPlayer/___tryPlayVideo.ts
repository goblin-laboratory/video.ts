function tryPlayVideo(video: HTMLVideoElement) {
  const result = video.play();

  if (false === result instanceof Promise) {
    return Promise.resolve(true);
  }
  return result
    .then(() => true)
    .catch(() => {
      video.muted = true;
      return video
        .play()
        .then(() => {
          return false;
        })
        .catch((err) => {
          console.error(err);
          return false;
        });
    });
}

export default tryPlayVideo;
