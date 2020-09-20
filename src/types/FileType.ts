import { AppId } from './App';
import { IconId } from './Icon';

export const fileTypes = [
  'bmpFile',
  'cdTrack',
  'helpFile',
  'midiFile',
  'msDosApp',
  'notepadDoc',
  'videoFile',
  'waveFile',
  'wordpadDoc',
];

export type FileTypeId = typeof fileTypes[number];

export type FileType<T> = {
  appId: AppId;
  id: T;
  iconId: IconId;
};

export type FileTypeList = { [key in FileTypeId]: FileType<key> };
