import { AppId, appIds } from '../../types/App';

export const appExists = (appId?: string): boolean => {
  if (!appId || typeof appId !== 'string') return false;
  return appIds.includes(appId as AppId);
};
