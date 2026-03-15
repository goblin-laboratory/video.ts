import { createContext, useRef } from 'react';
import useVideoEvent from './hooks/useVideoEvent';
import useVideoState from './hooks/useVideoState';
import { Factory } from './kernels';

const PlayerContext = createContext({} as { videoRef: React.RefObject<HTMLVideoElement>; state: Player.State });

function ReactjsPlayer({
  kernel,
  src,
  config,
  children,
}: {
  kernel: string;
  src: string;
  config: unknown;
  children?: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const state = useVideoState(src);
  useVideoEvent({ videoRef, state });

  return (
    <>
      {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
      <video
        ref={videoRef}
        controls={false}
        autoPlay
        preload="metadata"
        style={{
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          pointerEvents: 'none',
        }}
      />
      <Factory kernel={kernel} videoRef={videoRef} src={src} config={config} />
      <PlayerContext.Provider value={{ videoRef, state }}>{children}</PlayerContext.Provider>
    </>
  );
}

ReactjsPlayer.Context = PlayerContext;

export default ReactjsPlayer;
