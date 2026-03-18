import { PlayCircleOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import ReactjsPlayer from '../ReactjsPlayer';
import SkinCenter from './SkinCenter';

export default function CenterPlayButton() {
  const { videoRef, state } = useContext(ReactjsPlayer.Context);
  const el = videoRef?.current as HTMLVideoElement | null;

  const shouldShow = state.paused || state.ended;

  if (!shouldShow) return null;

  const handleClick = () => {
    if (!el) return;
    if (state.ended) {
      el.currentTime = 0;
    }
    void el.play();
  };

  return (
    <SkinCenter>
      <button
        type="button"
        onClick={handleClick}
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          border: 'none',
          borderRadius: '50%',
          width: 80,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#fff',
          transition: 'transform 0.15s ease, background 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
        }}
      >
        <PlayCircleOutlined style={{ fontSize: 48 }} />
      </button>
    </SkinCenter>
  );
}
