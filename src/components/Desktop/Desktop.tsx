import { h, FunctionComponent } from 'preact';
import { appList } from '../../data/appList';

import FileGrid from '../FileGrid/FileGrid';

import style from './Desktop.css';

interface Props {
  background?: string;
}

const Desktop: FunctionComponent<Props> = ({
  background = 'lightseagreen',
}: Props) => (
  <div className={style.desktop} style={{ background }}>
    <FileGrid
      direction="column"
      files={[
        {
          id: appList.myComputer.id,
          iconId: appList.myComputer.iconId,
          name: appList.myComputer.name,
        },
        {
          id: appList.networkNeighborhood.id,
          iconId: appList.networkNeighborhood.iconId,
          name: appList.networkNeighborhood.name,
        },
        {
          id: appList.briefcase.id,
          iconId: appList.briefcase.iconId,
          name: appList.briefcase.name,
        },
        {
          id: appList.binEmpty.id,
          iconId: appList.binEmpty.iconId,
          name: appList.binEmpty.name,
        },
      ]}
    />
  </div>
);

export default Desktop;
