import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../data/appList';
import { getFileFromPath } from '../../../utils/FileSystemUtils';
import Countour from '../../shared/Countour/Countour';
import MenuBar from '../../shared/MenuBar/MenuBar';
import WindowContent from '../../shared/WindowContent/WindowContent';

import style from './NotepadApp.css';

type Props = AppProps;

const NotepadApp: FunctionComponent<Props> = ({ workingFile }: Props) => (
  <WindowContent
    menu={<MenuBar options={['File', 'Edit', 'Search', 'Help']} />}
    body={
      <Countour>
        <textarea
          autoComplete="off"
          className={style.textarea}
          // eslint-disable-next-line react/no-unknown-property
          spellcheck={false}
          wrap="off"
        >
          {getFileFromPath(workingFile ?? '')?.content ?? ''}
        </textarea>
      </Countour>
    }
  />
);

export default NotepadApp;
