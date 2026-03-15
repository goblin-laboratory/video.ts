import { useDeepCompareEffect, useMemoizedFn, useMount, useUnmount } from 'ahooks';

function useFullscreen({ videoRef, state }: { videoRef: React.RefObject<HTMLVideoElement>; state: Player.State }) {
  useDeepCompareEffect(() => {
    const el = videoRef.current as HTMLVideoElement;
    const onChange = () => {
      console.log('onDurationChange');
      state.fullscreen = document.fullscreenElement === el;
    };
    document.addEventListener('fullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
    };
  }, []);
}

export default useFullscreen;
