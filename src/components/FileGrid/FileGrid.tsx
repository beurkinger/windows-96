import { h, FunctionComponent } from 'preact';

import { IconId } from '../../data/iconList';
import Icon from '../Icon/Icon';

import style from './FileGrid.css';

interface File {
  id: string;
  iconId: IconId;
  name: string;
}

interface Props {
  files: File[];
  direction: 'column' | 'row';
}

const FileGrid: FunctionComponent<Props> = ({
  files,
  direction = 'row',
}: Props) => {
  return (
    <div className={style.fileGrid} style={{ flexDirection: direction }}>
      {files.map((file, i) => (
        <div className={style.file} key={i + file.id}>
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
