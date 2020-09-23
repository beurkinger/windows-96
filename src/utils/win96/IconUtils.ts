import { IconId, iconIds } from '../../types/Icon';

export const iconExists = (iconId?: string): boolean => {
  if (!iconId || typeof iconId !== 'string') return false;
  return iconIds.includes(iconId as IconId);
};
