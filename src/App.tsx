import { useCreation } from 'ahooks';
import { Radio, Typography } from 'antd';
import { createStyles } from 'antd-style';
import { useState } from 'react';

const { Text } = Typography;

const useStyles = createStyles(({ css, token }) => ({
  appContainer: css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 24px;
    gap: 24px;
    background-color: ${token.colorBgBase};
  `,
  selectorSection: css`
    flex-shrink: 0;
  `,
  radioGroup: css`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  `,
  radioItem: css``,
  playerSection: css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  playerPlaceholder: css`
    width: 100%;
    max-width: 900px;
    aspect-ratio: 16 / 9;
    background-color: #000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 32px;
    gap: 16px;
  `,
  playerInfo: css`
    display: flex;
    gap: 8px;
  `,
  infoLabel: css`
    color: ${token.colorTextSecondary};
    min-width: 100px;
  `,
  infoValue: css`
    color: ${token.colorText};
  `,
}));

interface Option {
  id: string;
  mode: 'live' | 'playback';
  kernel: string;
  label: string;
  protocol: string;
  url: string;
}

const App = () => {
  const { styles } = useStyles();

  const options = useCreation((): Option[] => {
    return [
      {
        id: 'live-native',
        mode: 'live',
        kernel: 'native',
        label: '直播 - native',
        protocol: '原生 HTML5',
        url: '',
      },
      {
        id: 'live-srswebrtc',
        mode: 'live',
        kernel: 'srswebrtc',
        label: '直播 - srswebrtc',
        protocol: 'WebRTC',
        url: '',
      },
      {
        id: 'live-mpegts',
        mode: 'live',
        kernel: 'mpegts',
        label: '直播 - mpegts',
        protocol: 'MPEG-TS',
        url: '',
      },
      {
        id: 'live-hlsjs',
        mode: 'live',
        kernel: 'hlsjs',
        label: '直播 - hlsjs',
        protocol: 'HLS',
        url: '',
      },
      {
        id: 'playback-native',
        mode: 'playback',
        kernel: 'native',
        label: '回放 - native',
        protocol: '原生 HTML5',
        url: '',
      },
      {
        id: 'playback-hlsjs',
        mode: 'playback',
        kernel: 'hlsjs',
        label: '回放 - hlsjs',
        protocol: 'HLS',
        url: '',
      },
    ];
  }, []);

  const [selectedId, setSelectedId] = useState<string>('live-native');

  const selectedOption = useCreation(() => {
    return options.find((opt) => opt.id === selectedId) || options[0];
  }, [options, selectedId]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.selectorSection}>
        <Radio.Group
          className={styles.radioGroup}
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          {options.map((option) => (
            <Radio
              key={option.id}
              value={option.id}
              className={styles.radioItem}
            >
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </div>

      <div className={styles.playerSection}>
        <div className={styles.playerPlaceholder}>
          <div className={styles.playerInfo}>
            <Text strong className={styles.infoLabel}>
              播放模式：
            </Text>
            <Text className={styles.infoValue}>
              {selectedOption.mode === 'live' ? '直播' : '回放'}
            </Text>
          </div>
          <div className={styles.playerInfo}>
            <Text strong className={styles.infoLabel}>
              内核：
            </Text>
            <Text className={styles.infoValue}>{selectedOption.kernel}</Text>
          </div>
          <div className={styles.playerInfo}>
            <Text strong className={styles.infoLabel}>
              播放协议：
            </Text>
            <Text className={styles.infoValue}>{selectedOption.protocol}</Text>
          </div>
          <div className={styles.playerInfo}>
            <Text strong className={styles.infoLabel}>
              播放地址：
            </Text>
            <Text className={styles.infoValue}>
              {selectedOption.url || '（待补充）'}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
