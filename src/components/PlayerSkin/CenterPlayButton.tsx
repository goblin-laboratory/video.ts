import { CaretRightOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import Player from '../Player';
import SkinCenter from './SkinCenter';

export default function CenterPlayButton() {
  const { videoRef, state } = useContext(Player.Context);
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
          background: 'transparent',
          border: 'none',
          borderRadius: 0,
          width: 'auto',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#fff',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
          transition: 'transform 0.15s ease',
          padding: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <CaretRightOutlined style={{ fontSize: 72, marginLeft: 8 }} />
      </button>
    </SkinCenter>
  );
}
