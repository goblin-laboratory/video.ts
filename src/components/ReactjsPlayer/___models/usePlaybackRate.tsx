import { useDeepCompareEffect } from 'ahooks';
import { getValidNumber } from './useTime';

function usePlaybackRate({ videoRef, state }: { videoRef: React.RefObject<HTMLVideoElement>; state: Player.State }) {
  useDeepCompareEffect(() => {
    const el = videoRef.current as HTMLVideoElement;
    const onRateChange = () => {
      console.log('onRateChange');
      state.playbackRate = getValidNumber(el.playbackRate) || 1;
    };
    el.addEventListener('ratechange', onRateChange);
    return () => {
      el.removeEventListener('ratechange', onRateChange);
    };
  }, []);
}

export default usePlaybackRate;
