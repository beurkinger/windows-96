export type IconSize = 8 | 16 | 24 | 32;
export type IconUrls = Partial<{
  8: string;
  16: string;
  24: string;
  32: string;
}>;
export type IconList = { [key in IconId]: IconUrls };

const iconIds = [
  'addRemovePrograms',
  'binEmpty',
  'test',
  'binFull',
  'bmpFile',
  'briefcase',
  'calc',
  'cdDrive',
  'cdPlayer',
  'cdTrack',
  'controlPanel',
  'dateTime',
  'defrag',
  'dialUpNetwork',
  'documents',
  'hardDrive',
  'helpFile',
  'exchange',
  'explorer',
  'find',
  'findComputer',
  'findMsn',
  'floppyDrive',
  'folderOpen',
  'folderClosed',
  'fontFile',
  'help',
  'hyperterminal',
  'mediaPlayer',
  'menuArrow',
  'midiFile',
  'msn',
  'msDos',
  'msPaint',
  'music',
  'myComputer',
  'network',
  'notepad',
  'notepadDoc',
  'phoneDialer',
  'printers',
  'program',
  'programs',
  'quickView',
  'register',
  'run',
  'scandisk',
  'settings',
  'shutdown',
  'sound',
  'soundOff',
  'taskbar',
  'tree',
  'video',
  'videoFile',
  'volume',
  'warning',
  'waveFile',
  'windowsLogo',
  'wordpad',
  'wordpadDoc',
] as const;

export type IconId = typeof iconIds[number];

function importAll(r: __WebpackModuleApi.RequireContext) {
  const cache = {} as IconList;
  r.keys().forEach((key) => {
    const filePath: string = r(key);
    const matches = key.match(/\/(\w*?)\/(\w*?)_(\d*?)\.png/);
    const iconId = matches ? (matches[1] as IconId) : '';
    const size = matches ? (parseInt(matches[3]) as IconSize) : '';
    if (iconId && size) {
      const iconUrls: IconUrls = cache[iconId]
        ? {
            ...cache[iconId],
            [size]: filePath,
          }
        : {
            [size]: filePath,
          };
      cache[iconId as IconId] = iconUrls;
    }
  });
  const error = iconIds.some((iconId) => {
    if (!cache[iconId])
      console.error(
        `IconId "${iconId}" doesn't have an associated icon folder.`
      );
    return !cache[iconId];
  });
  if (error) throw "Some IconIds don't have an associated icon folder";
  return cache;
}
export const iconList = importAll(
  require.context('../assets/img/icons', true, /\.png$/)
);
