import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../data/appList';
import Countour from '../../shared/Countour/Countour';
import MenuBar from '../../shared/MenuBar/MenuBar';
import WindowContent from '../../shared/WindowContent/WindowContent';

import style from './NotepadApp.css';

const NotepadApp: FunctionComponent<AppProps> = ({ workingFile }: AppProps) => (
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
          {workingFile ? workingFile.content : null}
        </textarea>
      </Countour>
    }
  />
);

export default NotepadApp;
