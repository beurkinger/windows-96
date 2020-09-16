import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../data/appList';
import Countour from '../../shared/Countour/Countour';
import MenuBar from '../../shared/MenuBar/MenuBar';

import style from './NotepadApp.css';

type Props = AppProps & {
  fileId: string;
};

const NotepadApp: FunctionComponent<Props> = ({ fileId }: AppProps) => {
  return (
    <div className={style.notepadApp}>
      <MenuBar options={['File', 'Edit', 'Search', 'Help']} />
      <Countour>{fileId}</Countour>
    </div>
  );
};

export default NotepadApp;
