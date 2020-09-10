import { h, FunctionComponent, ComponentChildren } from 'preact';

import style from './GroupBox.css';

interface Props {
  children: ComponentChildren;
  legend?: string;
}

const GroupBox: FunctionComponent<Props> = ({ legend = '' }: Props) => (
  <fieldset className={style.groupbox}>
    {legend && <legend>{legend}</legend>}
  </fieldset>
);

export default GroupBox;
