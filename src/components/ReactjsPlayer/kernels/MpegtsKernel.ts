import mpegts from 'mpegts.js';
import Kernel from './Kernel';

class MpegtsKernel extends Kernel {
  static name = 'mpegts';

  load(props: Record<string, unknown>): Promise<mpegts.Player | null> {
    this.clean();
    this.props = props;
    const { src, config, video } = this.props as {
      src: string;
      config: mpegts.Config;
      video: HTMLVideoElement;
    };
    if (!src || !video) {
      this.props = null;
      return Promise.resolve(null);
    }
    const player = mpegts.createPlayer(
      { isLive: true, type: 'flv', url: src },
      config as mpegts.Config,
    );
    if (!player) {
      return Promise.resolve(null);
    }
    player.attachMediaElement(video);
    player.load();
    // player.play();
    player.on(mpegts.Events.ERROR, (type, detail) => {
      console.error(type, detail);
    });
    this.player = player;
    return Promise.resolve(player);
  }

  clean() {
    const player = this.player as mpegts.Player;
    this.player = null;
    this.props = null;
    if (player) {
      try {
        player.pause();
      } catch (_errMsg) {}
      try {
        player.unload();
      } catch (_errMsg) {}
      try {
        player.detachMediaElement();
      } catch (_errMsg) {}
      try {
        player.destroy();
      } catch (_errMsg) {}
    }
    return Promise.resolve();
  }
}

export default MpegtsKernel;
