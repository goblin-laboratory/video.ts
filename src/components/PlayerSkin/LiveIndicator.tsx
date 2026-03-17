import { Space, theme } from 'antd';
import { useContext } from 'react';
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

function LiveIndicator() {
  const { token } = theme.useToken();

  return (
    <Space size={token.sizeXXS}>
      <div
        style={{
          borderRadius: '50%',
          width: token.sizeXXS,
          height: token.sizeXXS,
          background: token.colorError,
          boxShadow: `0 0 ${token.sizeXXS}px ${token.colorErrorHover}`,
        }}
      />
      直播
    </Space>
  );
}

export default LiveIndicator;

export function LiveElapsed() {
  const { state } = useContext(ReactjsPlayer.Context);

  const elapsedMs = Math.max(0, (state?.currentTime ?? 0) * 1000);
  return <span>{formatDuration(elapsedMs)}</span>;
}
