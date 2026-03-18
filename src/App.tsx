import { useCreation } from 'ahooks';
import { Card, Input, Segmented } from 'antd';
import { createStyles } from 'antd-style';
import { useState } from 'react';
import { LivePlayerSkin } from './components/PlayerSkin/LivePlayerSkin';
import { PlaybackPlayerSkin } from './components/PlayerSkin/PlaybackPlayerSkin';
import ReactjsPlayer from './components/ReactjsPlayer';

const useStyles = createStyles(({ css }) => ({
  appContainer: css`
    min-height: 100vh;
    background:
      radial-gradient(ellipse at 10% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(ellipse at 90% 80%, rgba(255, 119, 198, 0.25) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(120, 219, 255, 0.2) 0%, transparent 60%),
      linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%);
    padding: 40px 24px 80px;
    position: relative;
    overflow-x: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 40%);
      pointer-events: none;
    }
  `,
  contentWrapper: css`
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 1;
  `,
  controlCard: css`
    background: rgba(255, 255, 255, 0.06) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 20px;
    margin-bottom: 24px;
    overflow: hidden;
    backdrop-filter: blur(20px);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    }
  `,
  cardBody: css`
    padding: 16px;
  `,
  urlInput: css`
    margin-top: 12px;
    .ant-input {
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #f8fafc;
      border-radius: 12px;
      padding: 12px 16px;
      font-size: 13px;
      font-family: 'JetBrains Mono', 'SF Mono', monospace;
      transition: all 0.25s ease;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);

      &::placeholder {
        color: rgba(248, 250, 252, 0.3);
      }

      &:focus {
        border-color: rgba(139, 92, 246, 0.6);
        box-shadow:
          0 0 0 3px rgba(139, 92, 246, 0.15),
          inset 0 2px 8px rgba(0, 0, 0, 0.3);
      }
    }
  `,
  playerCard: css`
    background: rgba(255, 255, 255, 0.06) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 24px;
    overflow: hidden;
    backdrop-filter: blur(20px);
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset,
      0 0 80px rgba(139, 92, 246, 0.1);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%);
      pointer-events: none;
    }
  `,
  playerWrapper: css`
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    position: relative;
    border-radius: 0;
    overflow: hidden;
  `,
  playerPlaceholder: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(248, 250, 252, 0.6);
    background:
      radial-gradient(ellipse at center, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%),
      linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%);
  `,
  placeholderIcon: css`
    font-size: 56px;
    margin-bottom: 20px;
    opacity: 0.4;
    filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
  `,
  placeholderText: css`
    color: rgba(248, 250, 252, 0.7);
    font-size: 15px;
    font-weight: 500;
  `,
  placeholderSubtext: css`
    font-size: 12px;
    color: rgba(248, 250, 252, 0.4);
    margin-top: 6px;
  `,
}));

interface SourceOption {
  id: string;
  mode: 'live' | 'playback';
  kernel: string;
  label: string;
  url: string;
}

const App = () => {
  const { styles } = useStyles();
  const [selectedOptionId, setSelectedOptionId] =
    useState<string>('live-native');

  const allOptions = useCreation((): SourceOption[] => {
    return [
      {
        id: 'live-native',
        mode: 'live',
        kernel: 'native',
        label: '直播 - 原生',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
      {
        id: 'live-srswebrtc',
        mode: 'live',
        kernel: 'srswebrtc',
        label: '直播 - WebRTC',
        url: 'webrtc://localhost/live/livestream',
      },
      {
        id: 'live-mpegts',
        mode: 'live',
        kernel: 'mpegts',
        label: '直播 - MPEG-TS',
        url: '',
      },
      {
        id: 'live-hlsjs',
        mode: 'live',
        kernel: 'hlsjs',
        label: '直播 - HLS',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      },
      {
        id: 'playback-native',
        mode: 'playback',
        kernel: 'native',
        label: '回放 - 原生',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
      {
        id: 'playback-hlsjs',
        mode: 'playback',
        kernel: 'hlsjs',
        label: '回放 - HLS',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      },
    ];
  }, []);

  const selectedOption = useCreation(() => {
    return allOptions.find((o) => o.id === selectedOptionId) || allOptions[0];
  }, [allOptions, selectedOptionId]);

  const segmentOptions = useCreation(() => {
    return allOptions.map((opt) => ({
      label: opt.label,
      value: opt.id,
    }));
  }, [allOptions]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.contentWrapper}>
        {/* Control Card */}
        <Card
          bordered={false}
          className={styles.controlCard}
          bodyStyle={{ padding: 0 }}
        >
          <div className={styles.cardBody}>
            <Segmented
              block
              size="large"
              value={selectedOptionId}
              onChange={setSelectedOptionId}
              options={segmentOptions}
            />
            <Input
              value={selectedOption.url}
              placeholder="输入视频播放地址..."
              className={styles.urlInput}
              readOnly
            />
          </div>
        </Card>

        {/* Player Card */}
        <Card
          bordered={false}
          className={styles.playerCard}
          bodyStyle={{ padding: 0 }}
        >
          <div className={styles.playerWrapper}>
            {selectedOption.url ? (
              <ReactjsPlayer
                kernel={selectedOption.kernel}
                src={selectedOption.url}
                config={{}}
              >
                {selectedOption.mode === 'live' ? (
                  <LivePlayerSkin />
                ) : (
                  <PlaybackPlayerSkin />
                )}
              </ReactjsPlayer>
            ) : (
              <div className={styles.playerPlaceholder}>
                <div className={styles.placeholderIcon}>📹</div>
                <span className={styles.placeholderText}>暂无可用视频源</span>
                <span className={styles.placeholderSubtext}>
                  请选择其他播放选项
                </span>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;
