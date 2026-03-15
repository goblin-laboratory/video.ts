import { useDeepCompareEffect } from 'ahooks';

function useVideoState({
  videoRef,
  state,
  startPlay,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
  state: Player.State;
  startPlay: () => void;
}) {
  useDeepCompareEffect(() => {
    const el = videoRef.current as HTMLVideoElement;
    const onLoadStart = () => {
      console.log('onLoadStart');
      if (state.loading) {
        startPlay();
      }
    };
    const onCanPlay = () => {
      console.log('onCanPlay');
      state.loading = false;
    };
    const onPlay = () => {
      console.log('onPlay');
      // state.paused = true;
    };
    const onPause = () => {
      console.log('onPause');
      state.paused = true;
    };
    const onPlaying = () => {
      console.log('onPlaying');
      state.paused = false;
      state.ended = false;
    };
    const onEnded = () => {
      console.log('onEnded');
      state.ended = true;
    };
    const onCanPlayThrough = () => {
      console.log('onCanPlayThrough');
      state.waiting = false;
    };
    const onWaiting = () => {
      console.log('onWaiting');
      state.waiting = true;
    };
    // 开始加载资源
    el.addEventListener('loadstart', onLoadStart);
    el.addEventListener('canplay', onCanPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('play', onPlay);
    el.addEventListener('playing', onPlaying);
    el.addEventListener('ended', onEnded);
    el.addEventListener('canplaythrough', onCanPlayThrough);
    el.addEventListener('waiting', onWaiting);
    return () => {
      el.removeEventListener('canplay', onCanPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('play', onPlay);
      el.removeEventListener('playing', onPlaying);
      el.removeEventListener('ended', onEnded);
      el.removeEventListener('canplaythrough', onCanPlayThrough);
      el.removeEventListener('waiting', onWaiting);
      // document.removeEventListener('click', onDocumentClick);
    };
  }, []);

  return null;
}

export default useVideoState;
