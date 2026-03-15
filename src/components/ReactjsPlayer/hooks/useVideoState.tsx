import { useDeepCompareLayoutEffect, useReactive } from 'ahooks';
import { merge } from 'es-toolkit/compat';
export default useVideoState;

function useVideoState(src?: string) {
  const state = useReactive<Player.State>(getInitialState());
  useDeepCompareLayoutEffect(() => {
    merge(state, getInitialState(src));
  }, [src]);
  return state;
}

function getInitialState(src?: string) {
  return {
    prevented: false,
    loading: Boolean(src),
    playing: false,
    paused: false,
    ended: false,
    seeking: false,
    waiting: false,
    duration: 0,
    currentTime: 0,
    buffered: null as unknown as TimeRanges,
    muted: false,
    volume: 1,
    playbackRate: 1,
    pip: false,
    fullscreen: false,
    error: null as Error,
    videoMuted: false,
  };
}
