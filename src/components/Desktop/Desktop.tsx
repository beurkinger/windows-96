import { h, FunctionComponent } from 'preact';

import style from './Desktop.css';

interface Props {
  background?: string;
}

const Desktop: FunctionComponent<Props> = ({
  background = 'lightseagreen',
}: Props) => <div className={style.desktop} style={{ background }} />;

export default Desktop;
