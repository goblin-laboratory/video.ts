import { AutoHide } from './AutoHide';

function PlayerSkin({ children }: { children: React.ReactNode }) {
  return <AutoHide>{children}</AutoHide>;
}

export default PlayerSkin;
