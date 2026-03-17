import {
  AudioMutedOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  SoundOutlined,
} from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import type { MenuProps } from 'antd';
import { Dropdown, Slider, Space, Tooltip, Typography } from 'antd';
import { useContext, useMemo, useState } from 'react';
import ReactjsPlayer from '../ReactjsPlayer';

function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;

  if (hours > 0) {
    return `${hours}:${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }
  return `${remainingMinutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

type PlayerBarProps = {
  actions?: React.ReactNode;
  extra?: React.ReactNode;
};

function PlayerBar({ actions = null, extra = null }: PlayerBarProps) {
  const { videoRef, state } = useContext(ReactjsPlayer.Context);
  const [seekingValue, setSeekingValue] = useState<number | null>(null);
  const el = videoRef?.current as HTMLVideoElement | null;

  // 计算展示用时间（视频元素以秒为单位，这里转毫秒复用格式化函数）
  const currentMs = Math.max(0, (seekingValue ?? state.currentTime) * 1000);
  const durationMs = Math.max(0, state.duration * 1000);
  const showProgress = Number.isFinite(state.duration) && state.duration > 0;

  const handleTogglePlay = useMemoizedFn(() => {
    try {
      if (!el) return;
      if (state.ended) {
        el.currentTime = 0;
      }
      if (state.paused || state.ended) {
        void el.play();
      } else {
        el.pause();
      }
    } catch (error) {
      // 控制播放失败时记录错误，避免应用崩溃
      // eslint-disable-next-line no-console
      console.error('切换播放状态失败', error);
    }
  });

  const handleVolumeChange = useMemoizedFn((value: number) => {
    try {
      if (!el) return;
      const vol = Math.min(1, Math.max(0, value / 100));
      el.muted = vol === 0;
      el.volume = vol;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('设置音量失败', error);
    }
  });

  const handleToggleMute = useMemoizedFn(() => {
    try {
      if (!el) return;
      el.muted = !el.muted;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('切换静音失败', error);
    }
  });

  const handleSeekCommit = useMemoizedFn((value: number) => {
    try {
      if (!el || !showProgress) return;
      const target = Math.min(state.duration, Math.max(0, value));
      el.currentTime = target;
      setSeekingValue(null);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('设置播放进度失败', error);
    }
  });

  const handleRateChange = useMemoizedFn((rate: number) => {
    try {
      if (!el) return;
      el.playbackRate = rate;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('设置倍速失败', error);
    }
  });

  const handleToggleFullscreen = useMemoizedFn(async () => {
    try {
      if (!el) return;
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('切换全屏失败', error);
    }
  });

  const volumePercent = Math.round((state.muted ? 0 : state.volume) * 100);
  const rateItems: MenuProps['items'] = useMemo(
    () =>
      [0.5, 1, 1.25, 1.5, 2].map((r) => ({
        key: String(r),
        label: `${r}x`,
        onClick: () => handleRateChange(r),
      })),
    [handleRateChange],
  );

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        padding: '8px 12px',
        background:
          'linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.85) 100%)',
        color: '#fff',
        boxSizing: 'border-box',
        userSelect: 'none',
      }}
    >
      {/* 进度条 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, paddingRight: 8 }}>
          <Slider
            min={0}
            max={Math.max(0, state.duration || 0)}
            step={0.1}
            value={seekingValue ?? (showProgress ? state.currentTime : 0)}
            onChange={(v: number | [number, number]) =>
              setSeekingValue(Number(v))
            }
            onChangeComplete={(v: number | [number, number]) =>
              handleSeekCommit(Number(v))
            }
            tooltip={{
              formatter: (v) =>
                v == null ? '' : formatDuration(Number(v) * 1000),
              open: false,
            }}
            disabled={!showProgress}
          />
        </div>
        <Typography.Text style={{ color: '#fff' }}>
          {formatDuration(currentMs)} /{' '}
          {durationMs > 0 ? formatDuration(durationMs) : '直播'}
        </Typography.Text>
      </div>

      {/* 控件栏 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 6,
        }}
      >
        <Space size={12} align="center">
          <Tooltip title={state.paused || state.ended ? '播放' : '暂停'}>
            <button
              type="button"
              onClick={handleTogglePlay}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
                height: 28,
                borderRadius: 4,
                border: '0 none',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              {state.paused || state.ended ? (
                <PlayCircleOutlined />
              ) : (
                <PauseCircleOutlined />
              )}
            </button>
          </Tooltip>

          <Space size={8} align="center">
            <Tooltip title={state.muted ? '取消静音' : '静音'}>
              <button
                type="button"
                onClick={handleToggleMute}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: 4,
                  border: '0 none',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                {state.muted || volumePercent === 0 ? (
                  <AudioMutedOutlined />
                ) : (
                  <SoundOutlined />
                )}
              </button>
            </Tooltip>
            <div style={{ width: 100 }}>
              <Slider
                min={0}
                max={100}
                step={1}
                value={volumePercent}
                onChange={(v: number | [number, number]) =>
                  handleVolumeChange(Number(v))
                }
              />
            </div>
          </Space>

          {actions}
        </Space>

        <Space size={12} align="center">
          <Dropdown
            menu={{ items: rateItems }}
            placement="topRight"
            trigger={['click']}
          >
            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 28,
                padding: '0 8px',
                borderRadius: 4,
                border: '0 none',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              {state.playbackRate?.toFixed(2)}x
            </button>
          </Dropdown>

          <Tooltip title={state.fullscreen ? '退出全屏' : '全屏'}>
            <button
              type="button"
              onClick={handleToggleFullscreen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
                height: 28,
                borderRadius: 4,
                border: '0 none',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              {state.fullscreen ? (
                <FullscreenExitOutlined />
              ) : (
                <FullscreenOutlined />
              )}
            </button>
          </Tooltip>

          {extra}
        </Space>
      </div>
    </div>
  );
}

export default PlayerBar;
