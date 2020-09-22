import { h, FunctionComponent } from 'preact';
import { ShellItem } from '../../../types/Shell';

import Icon from '../Icon/Icon';

import style from './FileGrid.css';

interface Props {
  direction?: 'column' | 'row';
  files: ShellItem[];
  onClick: (e: MouseEvent) => void;
  onClickFile: (file: ShellItem, e: MouseEvent) => void;
  onDblClickFile: (file: ShellItem, e: MouseEvent) => void;
  textColor?: 'inherit' | 'white';
}

const FileGrid: FunctionComponent<Props> = ({
  direction = 'row',
  files,
  onClick,
  onClickFile,
  onDblClickFile,
  textColor = 'inherit',
}: Props) => {
  const handleOnClickFile = (e: MouseEvent, file: ShellItem) => {
    e.preventDefault();
    e.stopPropagation();
    onClickFile(file, e);
  };

  const handleOnDblClickFile = (e: MouseEvent, file: ShellItem) => {
    e.preventDefault();
    e.stopPropagation();
    onDblClickFile(file, e);
  };

  return (
    <div
      className={style.fileGrid}
      onClick={onClick}
      style={{ flexDirection: direction }}
    >
      {files.map((file, i) => (
        <div
          className={`${style.file} ${file.hasFocus ? style.focus : ''} ${
            file.hasSoftFocus ? style.softFocus : ''
          }`}
          key={i + file.id}
          style={{ color: textColor }}
        >
          <div
            className={style.fileIcon}
            onClick={(e) => handleOnClickFile(e, file)}
            onDblClick={(e) => handleOnDblClickFile(e, file)}
          >
            <Icon iconId={file.iconId} size={32} />
          </div>
          <div
            className={style.fileLabel}
            onClick={(e) => handleOnClickFile(e, file)}
            onDblClick={(e) => handleOnDblClickFile(e, file)}
          >
            {file.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileGrid;
