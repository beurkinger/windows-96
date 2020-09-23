import {
  IconId,
  iconIds,
  IconList,
  IconSize,
  iconSizes,
  IconUrls,
} from '../types/Icon';

function importIcons(r: __WebpackModuleApi.RequireContext) {
  const importedIcons = {} as IconList;
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
export const iconList = importIcons(
  require.context('../assets/img/icons', true, /\.png$/)
);
