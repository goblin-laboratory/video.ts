import { useDeepCompareEffect, useMemoizedFn, useMount, useUnmount } from 'ahooks';

function useVolume({ videoRef, state }: { videoRef: React.RefObject<HTMLVideoElement>; state: Player.State }) {
  useDeepCompareEffect(() => {
    const el = videoRef.current as HTMLVideoElement;
    const onVolumeChange = () => {
      console.log('onVolumeChange');
      state.volume = el.volume;
      state.muted = el.muted;
    };
    el.addEventListener('ratechange', onVolumeChange);
    return () => {
      el.removeEventListener('ratechange', onVolumeChange);
    };
  }, []);
}

export default useVolume;
