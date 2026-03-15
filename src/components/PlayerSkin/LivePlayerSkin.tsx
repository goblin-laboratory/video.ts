import { AutoHide } from './AutoHide';
import LivePlayerBar from './LivePlayerBar';

export function LivePlayerSkin({ children }: { children?: React.ReactNode }) {
  return (
    <AutoHide>
      {children}
      <LivePlayerBar />
    </AutoHide>
  );
}
