import { useMemoizedFn } from 'ahooks';
import tryPlayVideo from '../___tryPlayVideo';

function usePlayController({ videoRef, state }: { videoRef: React.RefObject<HTMLVideoElement>; state: Player.State }) {
  const startPlay = useMemoizedFn(() => {
    return tryPlayVideo(videoRef.current as HTMLVideoElement).then((result) => {
      state.prevented = !result;
    });
  });

  const play = useMemoizedFn(() => {
    const el = videoRef.current as HTMLVideoElement;
    if (state.ended) {
      el.currentTime = 0;
    }
    el.play();
    state.paused = false;
  });

  const pause = useMemoizedFn(() => {
    videoRef.current?.pause();
    state.paused = true;
  });

  return { startPlay, play, pause };
}

export default usePlayController;
