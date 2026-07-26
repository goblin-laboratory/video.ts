import { useCreation, useDebounceEffect } from 'ahooks';
import Registry from './Registry';

function KernelFactory({
  kernel: name,
  src,
  config,
  videoRef,
}: {
  kernel: string;
  src: string;
  config: unknown;
  videoRef: React.RefObject<HTMLVideoElement>;
}) {
  const kernel = useCreation(() => {
    return Registry.getInstance().genKernel(name);
  }, [name]);

  useDebounceEffect(
    () => {
      if (!kernel || !src) {
        return;
      }
      kernel.load({ src, config, video: videoRef.current as HTMLVideoElement });
      // TODO: 错误提示
      return () => {
        kernel.clean();
      };
    },
    [src, kernel],
    { wait: 200 },
  );

  return null as React.ReactNode;
}

export default KernelFactory;
