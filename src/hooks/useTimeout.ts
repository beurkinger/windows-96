import { useEffect, useRef } from 'preact/hooks';

const useTimeout = (callback: () => void, duration: number): void => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window?.setTimeout(callback, duration);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTimeout;
