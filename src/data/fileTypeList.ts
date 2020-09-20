import { AppId } from '../types/App';
import { IconId } from '../types/Icon';

export type FileType<T> = {
  appId: AppId;
  id: T;
  iconId: IconId;
};

export type FileTypeList = { [key in FileTypeId]: FileType<key> };

export type FileTypeId =
  | 'bmpFile'
  | 'cdTrack'
  | 'helpFile'
  | 'midiFile'
  | 'msDosApp'
  | 'notepadDoc'
  | 'videoFile'
  | 'waveFile'
  | 'wordpadDoc';

const fileTypeList: FileTypeList = {
  bmpFile: { appId: 'quickView', id: 'bmpFile', iconId: 'bmpFile' },
  cdTrack: { appId: 'cdPlayer', id: 'cdTrack', iconId: 'cdTrack' },
  helpFile: { appId: 'help', id: 'helpFile', iconId: 'helpFile' },
  midiFile: { appId: 'briefcase', id: 'midiFile', iconId: 'midiFile' },
  msDosApp: { appId: 'msDos', id: 'msDosApp', iconId: 'program' },
  notepadDoc: { appId: 'notepad', id: 'notepadDoc', iconId: 'notepadDoc' },
  videoFile: { appId: 'mediaPlayer', id: 'videoFile', iconId: 'videoFile' },
  waveFile: { appId: 'mediaPlayer', id: 'waveFile', iconId: 'waveFile' },
  wordpadDoc: { appId: 'wordpad', id: 'wordpadDoc', iconId: 'wordpadDoc' },
} as const;

export default fileTypeList;
