import { h, FunctionComponent, ComponentChildren } from 'preact';

import style from './FieldRow.css';

interface Props {
  children: ComponentChildren;
}

const FieldRow: FunctionComponent<Props> = ({ children = null }: Props) => (
  <div className={style.fieldrow}>{children}</div>
);

export default FieldRow;
