import { useDeepCompareEffect } from 'ahooks';
import { getValidNumber } from './useTime';

interface VideoEventProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  state: PlayerState;
}

function useVideoEvent({ videoRef, state }: VideoEventProps) {
  useDeepCompareEffect(() => {
    const el = videoRef.current as HTMLVideoElement;
    if (!el) return;

    // 时间相关事件
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

    // 音量相关事件
    const onVolumeChange = () => {
      console.log('onVolumeChange');
      state.volume = el.volume;
      state.muted = el.muted;
    };

    // 播放速率相关事件
    const onRateChange = () => {
      console.log('onRateChange');
      state.playbackRate = getValidNumber(el.playbackRate) || 1;
    };

    // 全屏相关事件
    const onFullscreenChange = () => {
      console.log('onFullscreenChange');
      state.fullscreen = document.fullscreenElement === el;
    };

    // 添加事件监听
    el.addEventListener('durationchange', onDurationChange);
    el.addEventListener('timeupdate', onTimeUpdate);
    el.addEventListener('progress', onProgress);
    el.addEventListener('seeked', onSeeked);
    el.addEventListener('seeking', onSeeking);
    el.addEventListener('volumechange', onVolumeChange);
    el.addEventListener('ratechange', onRateChange);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    // 清理事件监听
    return () => {
      el.removeEventListener('durationchange', onDurationChange);
      el.removeEventListener('timeupdate', onTimeUpdate);
      el.removeEventListener('progress', onProgress);
      el.removeEventListener('seeked', onSeeked);
      el.removeEventListener('seeking', onSeeking);
      el.removeEventListener('volumechange', onVolumeChange);
      el.removeEventListener('ratechange', onRateChange);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);
}

export default useVideoEvent;
