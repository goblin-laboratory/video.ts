import { useDebounceEffect, useDeepCompareLayoutEffect, useReactive } from 'ahooks';

export default usePlayerState;

function usePlayerState(src?: string) {
  const state = useReactive<Player.State>(getInitialState());
  useDeepCompareLayoutEffect(() => {
    if (false === Boolean(src)) {
      const next = getInitialState();
      for (const key in next) {
        // @ts-ignore
        state[key] = next[key];
      }
    }
  }, [src]);

  useDebounceEffect(
    () => {
      if (true === Boolean(src)) {
        const next = getInitialState(src);
        for (const key in next) {
          // @ts-ignore
          state[key] = next[key];
        }
        state.loading = true;
      }
    },
    [src],
    { wait: 100 },
  );
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
    error: null,
    videoMuted: false,
  };
}
