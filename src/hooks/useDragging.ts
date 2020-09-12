import { RefObject } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import {
  Coords,
  hasTouchChanged,
  getMouseCoordsFromEvent,
  getTouchCoordsFromEvent,
  getFirstTouchIdFromEvent,
} from '../utils/DomUtils';
import { debounceWithRequestAnimationFrame } from '../utils/FunctionUtils';
import { getBounds, getBoundedOffset } from './utils/BoundingUtils';

export interface Options {
  onDragStart?: () => void;
  onDragStop?: (coords: Coords) => void;
  savedCoords?: Coords | null;
}

const useDragging = (
  eltRef: RefObject<HTMLElement>,
  { savedCoords = null, onDragStart, onDragStop }: Options
): Coords => {
  const originalElementCoords = useRef<Coords>({ x: 0, y: 0 });
  const originalMouseCoords = useRef<Coords>({ x: 0, y: 0 });
  const touchId = useRef<number | null>(null);
  const eltRefClone = useRef<HTMLElement | null>();

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coords>({ x: 100, y: 100 });

  useEffect(() => {
    eltRefClone.current = eltRef.current;
  });

  useEffect((): void => {
    if (!savedCoords) return;

    const hasMoved = savedCoords.x !== coords.x || savedCoords.y !== coords.y;
    if (!isDragging && hasMoved) {
      setCoords({ x: savedCoords.x, y: savedCoords.y });
    }
  }, [coords, isDragging, savedCoords]);

  useEffect((): (() => void) => {
    addPointerStartEventListeners();
    return () => {
      removePointerStartEventListeners();
      removePointerMoveEventListeners();
      removePointerStopEventListeners();
    };
  }, []);

  const addPointerStartEventListeners = (): void => {
    if (!eltRefClone.current) return;
    eltRefClone.current.addEventListener('mousedown', handleOnMouseDown, {
      passive: false,
    });
    eltRefClone.current.addEventListener('touchstart', handleOnTouchStart, {
      passive: false,
    });
  };

  const addPointerMoveEventListeners = (): void => {
    document.addEventListener('mousemove', handleOnMouseMove, {
      passive: false,
    });
    document.addEventListener('touchmove', handleOnTouchMove, {
      passive: false,
    });
    document.addEventListener('mouseup', handleOnEnd, {
      passive: false,
    });
  };

  const addPointerStopEventListeners = (): void => {
    document.addEventListener('touchend', handleOnEnd, {
      passive: false,
    });
    document.addEventListener('touchcancel', handleOnEnd, {
      passive: false,
    });
  };

  const removePointerStartEventListeners = (): void => {
    if (!eltRefClone.current) return;
    eltRefClone.current.removeEventListener('mousedown', handleOnMouseDown);
    eltRefClone.current.removeEventListener('touchstart', handleOnTouchStart);
  };

  const removePointerMoveEventListeners = (): void => {
    document.removeEventListener('mousemove', handleOnMouseMove);
    document.removeEventListener('touchmove', handleOnTouchMove);
  };

  const removePointerStopEventListeners = (): void => {
    document.removeEventListener('mouseup', handleOnEnd);
    document.removeEventListener('touchend', handleOnEnd);
    document.removeEventListener('touchcancel', handleOnEnd);
  };

  const applyDragging = debounceWithRequestAnimationFrame(
    (mouseCoords: Coords) => {
      if (!eltRefClone.current) return;
      const mouseOffsetX = mouseCoords.x - originalMouseCoords.current.x;
      const mouseOffsetY = mouseCoords.y - originalMouseCoords.current.y;
      const nextX = originalElementCoords.current.x + mouseOffsetX;
      const nextY = originalElementCoords.current.y + mouseOffsetY;

      const bounds = getBounds(eltRefClone.current);
      const coords = getBoundedOffset(nextX, nextY, bounds);

      setCoords(() => coords);
    }
  );

  const handleOnTouchStart = (e: TouchEvent): void => {
    e.preventDefault();
    touchId.current = getFirstTouchIdFromEvent(e);
    if (touchId.current === null) return;

    const coords = getTouchCoordsFromEvent(e, touchId.current);
    if (coords) handleStart(coords);
  };

  const handleOnMouseDown = (e: MouseEvent): void => {
    const mouseCoords = getMouseCoordsFromEvent(e);
    handleStart(mouseCoords);
  };

  const handleStart = (mouseCoords: Coords): void => {
    removePointerStartEventListeners();
    addPointerMoveEventListeners();
    addPointerStopEventListeners();

    setCoords((elementCoords) => {
      originalElementCoords.current = elementCoords;
      originalMouseCoords.current = mouseCoords;
      return elementCoords;
    });

    setIsDragging(true);

    if (onDragStart) onDragStart();
  };

  const handleOnMouseMove = (e: MouseEvent): void => {
    e.preventDefault();
    const mouseCoords = getMouseCoordsFromEvent(e);
    applyDragging(mouseCoords);
  };

  const handleOnTouchMove = (e: TouchEvent): void => {
    e.preventDefault();
    if (touchId.current === null || !hasTouchChanged(e, touchId.current))
      return;

    const touchCoords = getTouchCoordsFromEvent(e, touchId.current);
    if (touchCoords) applyDragging(touchCoords);
  };

  const handleOnEnd = (e: MouseEvent | TouchEvent): void => {
    e.preventDefault();

    removePointerMoveEventListeners();
    removePointerStopEventListeners();
    addPointerStartEventListeners();

    if (onDragStop) onDragStop(coords);
    setIsDragging(false);
  };

  return coords;
};

export default useDragging;
