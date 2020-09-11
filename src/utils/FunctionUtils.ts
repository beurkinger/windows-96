type Procedure = (...args: any[]) => void;

export const debounce = (func: Procedure, time: number): Procedure => {
  let timeout: number;
  return (...args: any[]) => {
    if (timeout) window?.clearTimeout(timeout);
    timeout = window?.setTimeout(() => func(...args), time);
  };
};

// Debounce like function that relies on requestAnimationFrame
export const debounceWithRequestAnimationFrame = (
  func: Procedure
): Procedure => {
  let animationFrame: number;
  return (...args: unknown[]) => {
    if (animationFrame) window?.cancelAnimationFrame(animationFrame);
    animationFrame = window?.requestAnimationFrame(() => func(...args));
  };
};
