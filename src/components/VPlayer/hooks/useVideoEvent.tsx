import { useDeepCompareEffect } from 'ahooks';
import { startPlay } from './startPlay';

function useVideoEvent({
  videoRef,
  state,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
  state: Player.State;
}) {
  useDeepCompareEffect(() => {
    const el = videoRef.current as HTMLVideoElement;
    if (!el) {
      return;
    }

    // 加载相关事件
    // loadstart - 开始加载媒体数据时触发
    const onLoadStart = () => {
      console.log('onLoadStart');
      state.loading = false;
      state.waiting = true;
      startPlay(el);
    };

    // loadedmetadata - 已加载媒体的元数据时触发
    const onLoadedMetadata = () => {
      console.log('onLoadedMetadata');
      state.duration = getValidNumber(el.duration);
    };

    // loadeddata - 当前帧的数据已加载，但没有足够的数据播放下一帧时触发
    const onLoadedData = () => {
      console.log('onLoadedData');
    };

    // progress - 正在下载媒体数据时周期性触发
    const onProgress = () => {
      console.log('onProgress');
      state.buffered = el.buffered;
    };

    // 播放状态相关事件
    // canplay - 可以开始播放时触发，但可能因缓冲而暂停
    const onCanPlay = () => {
      console.log('onCanPlay');
      state.loading = false;
    };

    // canplaythrough - 可以一直播放，不会因缓冲而暂停时触发
    const onCanPlayThrough = () => {
      console.log('onCanPlayThrough');
      state.waiting = false;
    };

    // play - 调用play()方法或设置autoplay时触发
    const onPlay = () => {
      console.log('onPlay');
      // state.paused = false;
      // state.ended = false;
    };

    // playing - 正在播放时触发
    const onPlaying = () => {
      console.log('onPlaying');
      state.paused = false;
      state.ended = false;
    };

    // waiting - 播放暂停，等待数据加载时触发
    const onWaiting = () => {
      console.log('onWaiting');
      state.waiting = true;
    };

    // pause - 播放暂停时触发
    const onPause = () => {
      console.log('onPause');
      state.paused = true;
      // state.playing = false;
    };

    // ended - 播放结束时触发
    const onEnded = () => {
      console.log('onEnded');
      state.ended = true;
      // state.playing = false;
    };

    // error - 发生错误时触发
    const onError = () => {
      console.log('onError');
      state.error = el.error as unknown as Error;
    };

    // stalled - 尝试获取媒体数据，但数据不可用时触发
    const onStalled = () => {
      console.log('onStalled');
      state.waiting = true;
    };

    // suspend - 媒体数据加载暂停时触发
    const onSuspend = () => {
      console.log('onSuspend');
    };

    // 进度相关事件
    // durationchange - 时长变化时触发
    const onDurationChange = () => {
      console.log('onDurationChange');
      state.duration = getValidNumber(el.duration);
    };

    // timeupdate - 播放位置改变时触发
    const onTimeUpdate = () => {
      console.log('onTimeUpdate');
      state.currentTime = getValidNumber(el.currentTime);
    };

    // seeking - 开始寻找新播放位置时触发
    const onSeeking = () => {
      console.log('onSeeking');
      state.seeking = true;
    };

    // seeked - 已经跳转到新的播放位置时触发
    const onSeeked = () => {
      console.log('onSeeked');
      state.seeking = false;
    };

    // 音量相关事件
    // volumechange - 音量改变或静音状态改变时触发
    const onVolumeChange = () => {
      console.log('onVolumeChange');
      state.volume = el.volume;
      state.muted = el.muted;
    };

    // 播放速率相关事件
    // ratechange - 播放速率改变时触发
    const onRateChange = () => {
      console.log('onRateChange');
      state.playbackRate = getValidNumber(el.playbackRate) || 1;
    };

    // 全屏相关事件
    // fullscreenchange - 进入或退出全屏时触发
    const onFullscreenChange = () => {
      console.log('onFullscreenChange');
      state.fullscreen = document.fullscreenElement === el;
    };

    // 按照事件触发顺序添加监听
    el.addEventListener('loadstart', onLoadStart);
    el.addEventListener('loadedmetadata', onLoadedMetadata);
    el.addEventListener('loadeddata', onLoadedData);
    el.addEventListener('progress', onProgress);
    el.addEventListener('canplay', onCanPlay);
    el.addEventListener('canplaythrough', onCanPlayThrough);
    el.addEventListener('play', onPlay);
    el.addEventListener('playing', onPlaying);
    el.addEventListener('waiting', onWaiting);
    el.addEventListener('pause', onPause);
    el.addEventListener('ended', onEnded);
    el.addEventListener('error', onError);
    el.addEventListener('stalled', onStalled);
    el.addEventListener('suspend', onSuspend);
    el.addEventListener('durationchange', onDurationChange);
    el.addEventListener('timeupdate', onTimeUpdate);
    el.addEventListener('seeking', onSeeking);
    el.addEventListener('seeked', onSeeked);
    el.addEventListener('volumechange', onVolumeChange);
    el.addEventListener('ratechange', onRateChange);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      el.removeEventListener('loadstart', onLoadStart);
      el.removeEventListener('loadedmetadata', onLoadedMetadata);
      el.removeEventListener('loadeddata', onLoadedData);
      el.removeEventListener('progress', onProgress);
      el.removeEventListener('canplay', onCanPlay);
      el.removeEventListener('canplaythrough', onCanPlayThrough);
      el.removeEventListener('play', onPlay);
      el.removeEventListener('playing', onPlaying);
      el.removeEventListener('waiting', onWaiting);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('ended', onEnded);
      el.removeEventListener('error', onError);
      el.removeEventListener('stalled', onStalled);
      el.removeEventListener('suspend', onSuspend);
      el.removeEventListener('durationchange', onDurationChange);
      el.removeEventListener('timeupdate', onTimeUpdate);
      el.removeEventListener('seeking', onSeeking);
      el.removeEventListener('seeked', onSeeked);
      el.removeEventListener('volumechange', onVolumeChange);
      el.removeEventListener('ratechange', onRateChange);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  return null as unknown;
}

export default useVideoEvent;

export function getValidNumber(v?: unknown) {
  const value = Number(v);
  // 将可能的非法数字统一为 0，合法且有限的数字原样返回
  // 注意：之前的实现错误地将所有有限数字都转换为 0，导致进度和时长显示异常
  if (Number.isNaN(value) || !Number.isFinite(value)) {
    return 0;
  }
  return value;
}
