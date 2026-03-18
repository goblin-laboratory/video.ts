import {
  AudioMutedOutlined,
  CaretRightOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  PauseOutlined,
  SoundOutlined,
} from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Button, Slider, Space, Tooltip, theme } from 'antd';
import { createStyles, cx } from 'antd-style';
import { useContext, useState } from 'react';
import ReactjsPlayer from '../ReactjsPlayer';
import LiveIndicator from './LiveIndicator';

type PlayerBarProps = {
  actions?: React.ReactNode;
  extra?: React.ReactNode;
};

function LivePlayerBar({ actions = null }: PlayerBarProps) {
  const { videoRef, state } = useContext(ReactjsPlayer.Context);
  const el = videoRef?.current as HTMLVideoElement | null;

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

  const { token } = theme.useToken();
  const { styles } = useStyles();

  return (
    <div className={cx(styles.playerBar, styles.spaceBetween)}>
      <Space size={token.sizeSM} align="center">
        <TooltipButton
          title={state.paused || state.ended ? '播放' : '暂停'}
          icon={state.paused || state.ended ? <CaretRightOutlined /> : <PauseOutlined />}
          onClick={handleTogglePlay}
        />
        <LiveIndicator />
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
              onChange={(v: number | [number, number]) => handleVolumeChange(Number(v))}
            />
          </div>
        </Space>

        {actions}
      </Space>

      <Space size={0} align="center">
        <Tooltip title={state.fullscreen ? '退出全屏' : '全屏'}>
          <Button
            type="text"
            style={{ color: '#fff', fontSize: token.sizeMD }}
            onClick={handleToggleFullscreen}
            icon={state.fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          />
        </Tooltip>
      </Space>
    </div>
  );
}

export default LivePlayerBar;

function TooltipButton({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  const { token } = theme.useToken();
  return (
    <Tooltip title={title}>
      <Button
        type="text"
        size="large"
        icon={icon}
        onClick={onClick}
        style={{ color: '#fff', fontSize: token.fontSizeXL }}
      />
    </Tooltip>
  );
}

const useStyles = createStyles(({ token }) => ({
  playerBar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: `${token.paddingXS}px ${token.paddingSM}px`,
    background: `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.65) 100%)`,
    color: token.colorWhite,
    fontSize: token.fontSizeLG,
    backdropFilter: `blur(${token.sizeMD}px)`,
    boxSizing: 'border-box',
    userSelect: 'none',
  },
  spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
