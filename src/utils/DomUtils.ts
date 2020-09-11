export interface Coords {
  x: number;
  y: number;
}

export interface Coords3d {
  x: number;
  y: number;
  z: number;
}

export interface Size {
  height: number;
  width: number;
}

export type BoundingRect = Coords & Size;

export const getBoundingRect = (element: HTMLElement | null): BoundingRect => {
  if (!element)
    return {
      height: 0,
      width: 0,
      x: 0,
      y: 0,
    };

  const rect: ClientRect = element.getBoundingClientRect();
  return {
    height: rect.height,
    width: rect.width,
    x: rect.left,
    y: rect.top,
  };
};

export const getMouseCoordsFromEvent = (e: MouseEvent): Coords => ({
  x: e.clientX,
  y: e.clientY,
});

export const isTouchEvent = (e: TouchEvent): boolean =>
  e && e.touches && e.touches.length !== 0;

export const getTouchFromEvent = (
  e: TouchEvent,
  identifier: number
): Touch | null => {
  if (!isTouchEvent(e)) return null;
  for (let i = 0; i < e.touches.length; i += 1) {
    if (e.touches[i].identifier === identifier) return e.touches[i];
  }
  return null;
};

export const getTouchCoordsFromEvent = (
  e: TouchEvent,
  identifier: number
): Coords | null => {
  const touch = getTouchFromEvent(e, identifier);
  return touch ? { x: touch.clientX, y: touch.clientY } : null;
};

export const getFirstTouchFromEvent = (e: TouchEvent): Touch | null => {
  if (!isTouchEvent(e)) return null;
  return e.targetTouches[0];
};

export const getFirstTouchIdFromEvent = (e: TouchEvent): number | null =>
  getFirstTouchFromEvent(e)?.identifier ?? null;

export const hasTouchChanged = (e: TouchEvent, identifier: number): boolean => {
  if (!isTouchEvent(e)) return false;
  return isTouchIdInList(e.changedTouches, identifier);
};

export const isTouchIdInList = (
  touchList: TouchList,
  identifier: number
): boolean => {
  for (let i = 0; i < touchList.length; i += 1) {
    if (touchList[i].identifier === identifier) return true;
  }
  return false;
};
