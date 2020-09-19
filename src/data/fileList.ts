export type FileList = { [filePath: string]: string };

function importFiles() {
  const importedFiles = {} as FileList;
  const r = require.context('../assets/files', true, /\.(png|txt)$/);
  r.keys().forEach((key) => {
    const content = r(key) ?? '';
    importedFiles[key.substring(2)] =
      typeof content === 'object' && 'default' in content
        ? content.default
        : content;
  });
  return importedFiles;
}
export const fileList = importFiles();
