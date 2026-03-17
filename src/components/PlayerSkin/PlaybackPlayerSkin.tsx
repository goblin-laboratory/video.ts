import { AutoHide } from './AutoHide';
import PlaybackPlayerBar from './PlaybackPlayerBar';

export function PlaybackPlayerSkin({ children }: { children?: React.ReactNode }) {
  return (
    <AutoHide>
      {children}
      <PlaybackPlayerBar />
    </AutoHide>
  );
}
