import type { HlsConfig } from 'hls.js';
import Hls from 'hls.js';
import Kernel from './Kernel';

class HlsjsKernel extends Kernel {
  static name = 'hlsjs';

  load(props: Record<string, unknown>): Promise<Hls | null> {
    this.clean();
    this.props = props;
    const { src, config, video } = this.props as {
      src: string;
      config: HlsConfig;
      video: HTMLVideoElement;
    };
    if (!src || !video) {
      this.props = null;
      return Promise.resolve(null);
    }
    const player = new Hls(Object.assign({}, config, { debug: false }));
    player.loadSource(src);
    player.attachMedia(video);
    player.on(Hls.Events.ERROR, (_, _info) => {});
    this.player = player;
    return Promise.resolve(player);
  }

  clean() {
    const player = this.player as Hls;
    this.player = null;
    this.props = null;
    if (player) {
      try {
        player.destroy();
      } catch (_errMsg) {}
    }
    return Promise.resolve();
  }
}

export default HlsjsKernel;
