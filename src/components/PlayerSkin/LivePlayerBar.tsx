import {
  CaretRightOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  PauseOutlined,
} from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Space, theme } from 'antd';
import { createStyles, cx } from 'antd-style';
import { useContext } from 'react';
import Player from '../Player';
import LiveIndicator from './LiveIndicator';
import TooltipButton from './TooltipButton';
import VolumeControl from './VolumeControl';

type PlayerBarProps = {
  actions?: React.ReactNode;
  extra?: React.ReactNode;
};

function LivePlayerBar({ actions = null }: PlayerBarProps) {
  const { videoRef, state } = useContext(Player.Context);
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
      console.error('切换播放状态失败', error);
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
      console.error('切换全屏失败', error);
    }
  });

  const { token } = theme.useToken();
  const { styles } = useStyles();

  return (
    <div className={cx(styles.playerBar, styles.spaceBetween)}>
      <Space size={token.sizeXXS} align="center">
        <TooltipButton
          title={state.paused || state.ended ? '播放' : '暂停'}
          icon={
            state.paused || state.ended ? (
              <CaretRightOutlined />
            ) : (
              <PauseOutlined />
            )
          }
          onClick={handleTogglePlay}
        />
        <VolumeControl sliderWidth={100} />
        <LiveIndicator />

        {actions}
      </Space>

      <Space size={0} align="center">
        <TooltipButton
          title={state.fullscreen ? '退出全屏' : '全屏'}
          icon={
            state.fullscreen ? (
              <FullscreenExitOutlined />
            ) : (
              <FullscreenOutlined />
            )
          }
          onClick={handleToggleFullscreen}
        />
      </Space>
    </div>
  );
}

export default LivePlayerBar;

// function TooltipButton({
//   title,
//   icon,
//   onClick,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   onClick: () => void;
// }) {
//   const { token } = theme.useToken();
//   return (
//     <Tooltip title={title}>
//       <Button
//         type="text"
//         // size="large"
//         icon={icon}
//         onClick={onClick}
//         style={{ color: '#fff', fontSize: token.fontSizeXL }}
//       />
//     </Tooltip>
//   );
// }

const useStyles = createStyles(({ token }) => ({
  playerBar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: `${token.paddingXS}px ${token.paddingSM}px`,
    background: 'transparent',
    color: token.colorWhite,
    fontSize: token.fontSizeLG,
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
