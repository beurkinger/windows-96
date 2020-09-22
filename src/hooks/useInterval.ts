import { useEffect, useRef } from 'preact/hooks';

const useInterval = (callback: () => void, delay: number): void => {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window?.setInterval(callback, delay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useInterval;
