export class Kernel {
  static name = '';
  protected player: unknown = null;
  protected props: Record<string, unknown> | null = null;

  load(props: Record<string, unknown>): Promise<unknown> {
    this.player = null;
    this.props = props;
    return Promise.resolve(this.player);
  }

  clean() {
    this.props = null;
    this.player = null;
    return Promise.resolve();
  }
}

export default Kernel;
