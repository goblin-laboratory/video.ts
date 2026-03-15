import { LoadingOutlined, PlayCircleOutlined } from '@ant-design/icons';

interface PlayBtnProps {
  disabled: boolean;
  loading: boolean;
  playing: boolean;
  onClick: () => void;
}

export default function PlayBtn({ disabled, loading, playing, onClick }: PlayBtnProps) {
  if (playing || disabled) {
    return null;
  }
  return (
    <button
      type="button"
      disabled={loading}
      onClick={onClick}
      style={{
        position: 'absolute',
        padding: 0,
        border: 0,
        margin: 0,
        outline: '0 !important',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 64,
        color: '#fff',
        cursor: 'pointer',
      }}
    >
      {loading ? <LoadingOutlined /> : <PlayCircleOutlined />}
    </button>
  );
}
