export type IconSize = 8 | 16 | 24 | 32;
export type IconUrls = Partial<{
  8: string;
  16: string;
  24: string;
  32: string;
}>;
export type IconList = { [key in IconId]: IconUrls };

const iconIds = [
  'accessibility',
  'addRemovePrograms',
  'binEmpty',
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
  'display',
  'documents',
  'fonts_shortcut',
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
  'internet',
  'joystick',
  'keyboard',
  'mediaPlayer',
  'menuArrow',
  'midiFile',
  'modems',
  'mouse',
  'msn',
  'msDos',
  'msPaint',
  'multimedia',
  'music',
  'myComputer',
  'network',
  'notepad',
  'notepadDoc',
  'passwords',
  'phoneDialer',
  'power',
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
        `Icon id "${iconId}" doesn't have an associated icon folder.`
      );
    return !cache[iconId];
  });
  if (error) throw "Some Icon ids don't have an associated icon folder";
  return cache;
}
export const iconList = importAll(
  require.context('../assets/img/icons', true, /\.png$/)
);
