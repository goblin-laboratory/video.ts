import Kernel from './Kernel';
import SRSPlayer from './SRSPlayer';

class SRSWebRTCKernel extends Kernel {
  static name = 'srswebrtc';

  load(props: Record<string, unknown>): Promise<SRSPlayer | null> {
    this.clean();
    this.props = props;
    const { src, config, video } = this.props as {
      src: string;
      config: Player.SRSConfig;
      video: HTMLVideoElement;
    };
    if (!src || !video) {
      this.props = null;
      return Promise.resolve(null);
    }
    const player = new SRSPlayer(src, config);
    const stream = player.subscribe();
    video.pause();
    video.srcObject = stream;
    video.load();
    this.player = player;
    return Promise.resolve(player);
  }

  clean() {
    const video = this.props?.video as HTMLVideoElement;
    const player = this.player as SRSPlayer;
    if (video) {
      video.pause();
      video.srcObject = null;
    }
    try {
      player.destroy();
    } catch (_errMsg) {}
    this.player = null;
    this.props = null;
    return Promise.resolve();
  }
}

export default SRSWebRTCKernel;
