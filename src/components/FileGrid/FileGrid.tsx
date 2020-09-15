import { h, FunctionComponent } from 'preact';

import { IconId } from '../../data/iconList';
import Icon from '../Icon/Icon';

import style from './FileGrid.css';

export interface GridFile {
  id: string;
  iconId: IconId;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  type: 'app' | 'folder' | 'file';
}

interface Props {
  direction: 'column' | 'row';
  onClickFile: (fileId: string, fileType: string, e: MouseEvent) => void;
  onDblClickFile: (fileId: string, fileType: string, e: MouseEvent) => void;
  files: GridFile[];
}

const FileGrid: FunctionComponent<Props> = ({
  direction = 'row',
  files,
  onClickFile,
  onDblClickFile,
}: Props) => {
  console.log(files);
  return (
    <div className={style.fileGrid} style={{ flexDirection: direction }}>
      {files.map((file, i) => (
        <div
          className={`${style.file} ${file.hasFocus ? style.focus : ''} ${
            file.hasSoftFocus ? style.softFocus : ''
          }`}
          key={i + file.id}
          onClick={(e) => onClickFile(file.id, file.type, e)}
          onDblClick={(e) => onDblClickFile(file.id, file.type, e)}
        >
          <div className={style.fileIcon}>
            <Icon iconId={file.iconId} size={32} />
          </div>
          <div className={style.fileLabel}>{file.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FileGrid;
