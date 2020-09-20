import { Coords, getBoundingRect } from './DomUtils';

export interface Bounds {
  xMax: number;
  xMin: number;
  yMax: number;
  yMin: number;
}

export const getBounds = (
  node: HTMLElement,
  boundingNode?: HTMLElement | null,
  minCoords: Coords | null = null
): Bounds => {
  const { height, width } = getBoundingRect(node);
  const { height: parentHeight, width: parentWidth } = getBoundingRect(
    boundingNode ? boundingNode : document.documentElement
  );
  return {
    xMax: parentWidth - width,
    xMin: minCoords ? Math.max(minCoords.x, 0) : 0,
    yMax: parentHeight - height,
    yMin: minCoords ? Math.max(minCoords.y, 0) : 0,
  };
};

export const getBoundedOffset = (
  coords: Coords,
  bounds: Bounds | null
): Coords => {
  if (!bounds) return coords;

  const { xMin, yMin, xMax, yMax } = bounds;

  const clampedOffsetX = Math.round(Math.max(xMin, Math.min(coords.x, xMax)));
  const clampedOffsetY = Math.round(Math.max(yMin, Math.min(coords.y, yMax)));
  return { x: clampedOffsetX, y: clampedOffsetY };
};
