import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../data/appList';
import Countour from '../../shared/Countour/Countour';
import MenuBar from '../../shared/MenuBar/MenuBar';

import style from './NotepadApp.css';

type Props = AppProps;

const NotepadApp: FunctionComponent<Props> = ({ workingFile }: Props) => {
  return (
    <div className={style.notepadApp}>
      <MenuBar options={['File', 'Edit', 'Search', 'Help']} />
      <Countour>
        <textarea
          autoComplete="off"
          className={style.textarea}
          // eslint-disable-next-line react/no-unknown-property
          spellcheck={false}
          wrap="off"
        >
          {workingFile?.content ?? ''}
        </textarea>
      </Countour>
    </div>
  );
};

export default NotepadApp;
