import { MutedOutlined, SoundOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { Button, Slider, Space, Tooltip, theme } from 'antd';
import { createStyles } from 'antd-style';
import { useContext } from 'react';
import ReactjsPlayer from '../ReactjsPlayer';

const volumeSliderStyles = {
  trackStyle: { backgroundColor: '#fff' },
  handleStyle: { borderColor: '#fff', backgroundColor: '#fff' },
  activeDotStyle: { borderColor: '#fff' },
  railStyle: { backgroundColor: 'rgba(255,255,255,0.3)' },
};

type VolumeControlProps = {
  sliderWidth?: number;
};

export function VolumeControl({ sliderWidth = 100 }: VolumeControlProps) {
  const { videoRef, state } = useContext(ReactjsPlayer.Context);
  const el = videoRef?.current as HTMLVideoElement | null;

  const handleVolumeChange = useMemoizedFn((value: number) => {
    try {
      if (!el) return;
      const vol = Math.min(1, Math.max(0, value / 100));
      el.muted = vol === 0;
      el.volume = vol;
    } catch (error) {
      console.error('设置音量失败', error);
    }
  });

  const handleToggleMute = useMemoizedFn(() => {
    try {
      if (!el) return;
      el.muted = !el.muted;
    } catch (error) {
      console.error('切换静音失败', error);
    }
  });

  const volumePercent = Math.round((state.muted ? 0 : state.volume) * 100);
  const { token } = theme.useToken();
  const { styles } = useStyles();

  return (
    <Space size={4} align="center" style={{ display: 'flex' }}>
      <Tooltip title={state.muted ? '取消静音' : '静音'}>
        <Button
          type="text"
          size="large"
          icon={
            state.muted || volumePercent === 0 ? (
              <MutedOutlined />
            ) : (
              <SoundOutlined />
            )
          }
          onClick={handleToggleMute}
          style={{ color: '#fff', fontSize: token.fontSizeXL }}
        />
      </Tooltip>
      <div className={styles.sliderContainer} style={{ width: sliderWidth }}>
        <Slider
          min={0}
          max={100}
          step={1}
          value={volumePercent}
          onChange={(v: number | [number, number]) =>
            handleVolumeChange(Number(v))
          }
          {...volumeSliderStyles}
        />
      </div>
    </Space>
  );
}

const useStyles = createStyles(({ css }) => ({
  sliderContainer: css`
    .ant-slider-handle::after {
      box-shadow: 0 0 0 2px #fff !important;
      background-color: #fff !important;
    }
  `,
}));

export default VolumeControl;
