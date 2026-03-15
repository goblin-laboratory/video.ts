import { useContext } from 'react';
import { Space, Typography, theme } from 'antd';
import { formatDuration } from '@/utils/format';
import ReactjsPlayer from '../ReactjsPlayer';

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
