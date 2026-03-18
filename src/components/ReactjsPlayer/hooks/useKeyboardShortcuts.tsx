import { useMemoizedFn } from 'ahooks';
import { useEffect, useRef } from 'react';

type UseKeyboardShortcutsOptions = {
  videoRef: React.RefObject<HTMLVideoElement>;
  enabled?: boolean;
};

export default function useKeyboardShortcuts({
  videoRef,
  enabled = true,
}: UseKeyboardShortcutsOptions) {
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const isEditableElement = useMemoizedFn((element: EventTarget | null) => {
    if (!element || !(element instanceof HTMLElement)) return false;
    const tagName = element.tagName.toLowerCase();
    return (
      tagName === 'input' || tagName === 'textarea' || element.isContentEditable
    );
  });

  const handleKeyDown = useMemoizedFn((event: KeyboardEvent) => {
    if (!enabled) return;
    if (!videoRef.current) return;
    if (isEditableElement(event.target)) return;

    const el = videoRef.current;
    let handled = false;

    switch (event.code) {
      case 'Space':
        event.preventDefault();
        if (el.paused || el.ended) {
          if (el.ended) el.currentTime = 0;
          void el.play();
        } else {
          el.pause();
        }
        handled = true;
        break;

      case 'ArrowLeft':
        event.preventDefault();
        el.currentTime = Math.max(0, el.currentTime - 5);
        handled = true;
        break;

      case 'ArrowRight':
        event.preventDefault();
        el.currentTime = Math.min(
          el.duration || el.currentTime,
          el.currentTime + 5,
        );
        handled = true;
        break;

      case 'ArrowUp':
        event.preventDefault();
        el.muted = false;
        el.volume = Math.min(1, el.volume + 0.1);
        handled = true;
        break;

      case 'ArrowDown':
        event.preventDefault();
        el.volume = Math.max(0, el.volume - 0.1);
        el.muted = el.volume === 0;
        handled = true;
        break;

      case 'KeyM':
        event.preventDefault();
        el.muted = !el.muted;
        handled = true;
        break;

      case 'KeyF':
        event.preventDefault();
        if (document.fullscreenElement) {
          void document.exitFullscreen();
        } else {
          void el.requestFullscreen();
        }
        handled = true;
        break;
    }

    if (handled) {
      event.stopPropagation();
    }
  });

  useEffect(() => {
    if (!enabled) return;

    const handleFocus = () => {
      lastFocusedElementRef.current = document.activeElement as HTMLElement;
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('focusin', handleFocus);

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('focusin', handleFocus);
    };
  }, [enabled, handleKeyDown]);
}
