const iconIds = [
  'accessibility',
  'addHardware',
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
  'fontsShortcut',
  'fontFile',
  'fontTtFile',
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
  'msMail',
  'msPaint',
  'multimedia',
  'music',
  'myComputer',
  'network',
  'networkNeighborhood',
  'notepad',
  'notepadDoc',
  'passwords',
  'phoneDialer',
  'power',
  'printers',
  'printersShortcut',
  'program',
  'programs',
  'quickView',
  'regionalSettings',
  'register',
  'run',
  'scandisk',
  'settings',
  'shutdown',
  'sound',
  'sounds',
  'soundOff',
  'system',
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

const iconSizes = [8, 16, 24, 32] as const;
export type IconSize = typeof iconSizes[number];
export type IconUrls = Partial<{ [key in IconSize]: string }>;

export type IconList = { [key in IconId]: IconUrls };

function importIcons() {
  const importedIcons = {} as IconList;
  const r = require.context('../assets/img/icons', true, /\.png$/);
  r.keys().forEach((key) => {
    const filePath: string = r(key);
    const matches = key.match(/\/(\w*?)\/(\w*?)_(\d*?)\.png/);
    const iconId = matches ? (matches[1] as IconId) : '';
    const size = matches ? (parseInt(matches[3]) as IconSize) : null;
    if (iconId && size && iconSizes.includes(size)) {
      const iconUrls: IconUrls = importedIcons[iconId]
        ? {
            ...importedIcons[iconId],
            [size]: filePath,
          }
        : {
            [size]: filePath,
          };
      importedIcons[iconId as IconId] = iconUrls;
    }
  });
  const error = iconIds.some((iconId) => {
    if (!importedIcons[iconId])
      console.error(
        `Icon id "${iconId}" doesn't have an associated icon folder.`
      );
    return !importedIcons[iconId];
  });
  if (error) throw "Some Icon ids don't have an associated icon folder";
  return importedIcons;
}
export const iconList = importIcons();
