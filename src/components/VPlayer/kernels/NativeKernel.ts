import Kernel from './Kernel';

class NativeKernel extends Kernel {
  static name = 'native';

  constructor() {
    super();
    // 页面关闭时停止播放，手机端需要验证
    window.addEventListener('beforeunload', this.clean);
    window.addEventListener('pagehide', this.clean);
    window.addEventListener('unload', this.clean);
  }

  load(props: Record<string, unknown>): Promise<HTMLVideoElement | null> {
    this.clean();
    this.props = props;
    const { src, video } = this.props as {
      src: string;
      video: HTMLVideoElement;
    };
    if (!src || !video) {
      this.props = null;
      return Promise.resolve(null);
    }
    video.pause();
    video.src = src;
    video.load();
    // NOTE: iOS 微信浏览器中测试自动播放，与其他终端不一样，其他终端会加载数据并触发 canplay 事件，iOS 中并不会触发任何数据加载
    // onPlayClick();
    return Promise.resolve(video);
  }

  clean = () => {
    const video = this.props?.video as HTMLVideoElement;
    if (video) {
      video.pause();
      video.src = '';
    }
    this.player = null;
    this.props = null;
    return Promise.resolve();
  };
}

export default NativeKernel;
