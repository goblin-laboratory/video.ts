declare namespace Player {
  type State = {
    // prevented: boolean;
    // playing: boolean;
    loading: boolean;
    paused: boolean;
    ended: boolean;
    seeking: boolean;
    waiting: boolean;
    duration: number;
    currentTime: number;
    buffered: TimeRanges;
    muted: boolean;
    volume: number;
    playbackRate: number;
    pip: boolean;
    fullscreen: boolean;
    error: Error | null;
  };

  type SRSConfig = {
    api?: string;
    protocol?: string;
    host?: string;
    pathname?: string;
  };
}
