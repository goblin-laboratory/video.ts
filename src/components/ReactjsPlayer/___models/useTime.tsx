import { useDeepCompareEffect, useMemoizedFn, useMount, useUnmount } from 'ahooks';

function useTime({ videoRef, state }: { videoRef: React.RefObject<HTMLVideoElement>; state: Player.State }) {
  useDeepCompareEffect(() => {
    const el = videoRef.current as HTMLVideoElement;
    const onDurationChange = () => {
      console.log('onDurationChange');
      state.duration = getValidNumber(el.duration);
    };
    const onTimeUpdate = () => {
      console.log('onTimeUpdate');
      state.currentTime = getValidNumber(el.currentTime);
    };
    const onProgress = () => {
      console.log('onProgress');
      state.buffered = el.buffered;
    };
    const onSeeked = () => {
      console.log('onSeeked');
      state.seeking = false;
    };
    const onSeeking = () => {
      console.log('onSeeking');
      state.seeking = true;
    };
    el.addEventListener('durationchange', onDurationChange);
    el.addEventListener('timeupdate', onTimeUpdate);
    el.addEventListener('progress', onProgress);
    el.addEventListener('seeked', onSeeked);
    el.addEventListener('seeking', onSeeking);
    return () => {
      el.removeEventListener('durationchange', onDurationChange);
      el.removeEventListener('timeupdate', onTimeUpdate);
      el.removeEventListener('progress', onProgress);
      el.removeEventListener('seeking', onSeeking);
      el.removeEventListener('seeked', onSeeked);
    };
  }, []);
}

export default useTime;

/** 获取合法的数字 */
export function getValidNumber(v?: unknown) {
  const value = Number(v);
  return Number.isNaN(value) || Number.isFinite(value) ? 0 : value;
}
