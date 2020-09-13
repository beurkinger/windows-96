import { Coords, getBoundingRect } from '../../utils/DomUtils';

export interface Bounds {
  xMax: number;
  xMin: number;
  yMax: number;
  yMin: number;
}

// Right now we can only bound to parent. Better bounding handling = partial rewritting of component.
export const getBounds = (
  node: HTMLElement,
  boundingNode?: HTMLElement | null
): Bounds => {
  const { height, width } = getBoundingRect(node);
  const { height: parentHeight, width: parentWidth } = getBoundingRect(
    boundingNode ? boundingNode : document.documentElement
  );
  return {
    xMax: parentWidth - width,
    xMin: 0,
    yMax: parentHeight - height,
    yMin: 0,
  };
};

export const getBoundedOffset = (
  nextX: number,
  nextY: number,
  bounds: Bounds | null
): Coords => {
  if (!bounds) return { x: nextX, y: nextY };

  const { xMin, yMin, xMax, yMax } = bounds;

  const clampedOffsetX = Math.round(Math.max(xMin, Math.min(nextX, xMax)));
  const clampedOffsetY = Math.round(Math.max(yMin, Math.min(nextY, yMax)));
  return { x: clampedOffsetX, y: clampedOffsetY };
};
