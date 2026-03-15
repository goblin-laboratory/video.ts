import { useDebounceFn, useUpdateEffect } from 'ahooks';
import { useContext, useState } from 'react';
import ReactjsPlayer from '../ReactjsPlayer';

export function AutoHide({ children }: { children: React.ReactNode }) {
  const { state } = useContext(ReactjsPlayer.Context);
  const [hidden, setHidden] = useState(false);
  const shouldShow = state.loading || state.paused || state.ended || state.waiting || state.seeking;
  const { run: hide, cancel } = useDebounceFn(() => setHidden(true), { wait: 3000 });

  useUpdateEffect(() => {
    if (shouldShow) {
      cancel();
      setHidden(false);
    } else {
      hide();
    }
  }, [shouldShow]);

  const show = () => {
    setHidden(false);
    hide();
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: 外层透明层需要捕获鼠标/触摸事件以控制工具栏显隐，不作为可操作控件
    <div
      onMouseEnter={show}
      onMouseMove={show}
      onMouseLeave={hide}
      onTouchStart={show}
      onTouchMove={show}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        color: '#fff',
        textShadow: '0 0 1px rgba(0, 0, 0, 0.5)',
        outline: 'none',
        display: 'block',
        opacity: hidden ? 0 : 1,
        transition: 'opacity 300ms ease-in-out',
        willChange: 'opacity',
        cursor: hidden ? 'none' : 'default',
        background: 'transparent',
        // 允许内部控件交互
        // pointerEvents: hidden ? 'none' : 'auto',
      }}
    >
      {children}
    </div>
  );
}
