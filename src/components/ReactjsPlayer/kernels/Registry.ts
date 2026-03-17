import HlsjsKernel from './HlsjsKernel';
import MpegtsKernel from './MpegtsKernel';
import NativeKernel from './NativeKernel';
import SRSWebRTCKernel from './SRSWebRTCKernel';

class Registry {
  static instance: Registry;
  static getInstance(): Registry {
    if (!Registry.instance) {
      Registry.instance = new Registry();
    }
    return Registry.instance;
  }

  private kernels: Map<string, unknown> = new Map();
  constructor() {
    this.init();
  }

  private init() {
    this.kernels.clear();
    [SRSWebRTCKernel, MpegtsKernel, HlsjsKernel, NativeKernel].forEach((it) =>
      this.kernels.set(it.name, it),
    );
  }

  register(kernels: any[]): void {
    (kernels || []).forEach((it) => {
      this.kernels.set(it.name, it);
    });
  }

  unregister(kernels?: any[]): void {
    if (!kernels) {
      this.init();
    } else {
      (kernels || []).forEach((it) => {
        this.kernels.delete(it.name);
      });
    }
  }

  genKernel(name?: string): any | null {
    if (!name) {
      return null;
    }
    const Kernel = this.kernels.get(name) as any;
    if (!Kernel) {
      return null;
    }
    return new Kernel();
  }
}

export default Registry;
