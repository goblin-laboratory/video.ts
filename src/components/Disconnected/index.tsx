import { useCountDown } from 'ahooks';
import { Col, Row, Statistic } from 'antd';

interface DisconnectedProps {
  timestamp: number;
  reconnect?: () => void;
}

export default function Disconnected({ timestamp, reconnect }: DisconnectedProps) {
  if (!timestamp) {
    return null;
  }
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '4px',
        zIndex: 1000,
      }}
    >
      <CountDown timestamp={timestamp} reconnect={reconnect} />
    </div>
  );
}

function CountDown({ timestamp, reconnect }: DisconnectedProps) {
  const [_, formattedRes] = useCountDown({
    onEnd: () => {
      if (timestamp) {
        reconnect?.();
      }
    },
    targetDate: new Date(timestamp),
  });
  const seconds = formattedRes?.seconds;
  return seconds ? `连接断开，${seconds} 秒后重新连接...` : '正在重连...';
}
