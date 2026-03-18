import { AutoHide } from './AutoHide';
import CenterPlayButton from './CenterPlayButton';
import PlaybackPlayerBar from './PlaybackPlayerBar';

export function PlaybackPlayerSkin({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <AutoHide>
      {children}
      <CenterPlayButton />
      <PlaybackPlayerBar />
    </AutoHide>
  );
}
