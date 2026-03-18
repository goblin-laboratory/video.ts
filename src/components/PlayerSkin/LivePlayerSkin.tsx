import { AutoHide } from './AutoHide';
import CenterPlayButton from './CenterPlayButton';
import LivePlayerBar from './LivePlayerBar';

export function LivePlayerSkin({ children }: { children?: React.ReactNode }) {
  return (
    <AutoHide>
      {children}
      <CenterPlayButton />
      <LivePlayerBar />
    </AutoHide>
  );
}
