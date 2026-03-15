export function startPlay(video: HTMLVideoElement, muted = false) {
  video.muted = muted;
  const result = video.play();
  if (!(result instanceof Promise)) {
    return Promise.resolve(true);
  }
  return result.catch((errMsg) => {
    console.error('startPlay: ', errMsg);
    video.muted = true;
    return video.play().finally(() => false);
  });
}
