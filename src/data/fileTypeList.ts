import { AppId } from './appList';
import { IconId } from './iconList';

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
  bmpFile: { appId: 'msPaint', id: 'bmpFile', iconId: 'msPaint' },
  cdTrack: { appId: 'cdPlayer', id: 'cdTrack', iconId: 'msPaint' },
  helpFile: { appId: 'help', id: 'helpFile', iconId: 'msPaint' },
  midiFile: { appId: 'briefcase', id: 'midiFile', iconId: 'msPaint' },
  msDosApp: { appId: 'msDos', id: 'msDosApp', iconId: 'msPaint' },
  notepadDoc: { appId: 'notepad', id: 'notepadDoc', iconId: 'notepadDoc' },
  videoFile: { appId: 'mediaPlayer', id: 'videoFile', iconId: 'msPaint' },
  waveFile: { appId: 'mediaPlayer', id: 'waveFile', iconId: 'msPaint' },
  wordpadDoc: { appId: 'wordpad', id: 'wordpadDoc', iconId: 'wordpadDoc' },
};

export default fileTypeList;
