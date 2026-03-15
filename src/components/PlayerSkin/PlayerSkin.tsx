import { AutoHide } from './AutoHide';
import PlayerBar from './PlayerBar';

function PlayerSkin({ children }: { children: React.ReactNode }) {
  return <AutoHide>{children}</AutoHide>;
}

export default PlayerSkin;
