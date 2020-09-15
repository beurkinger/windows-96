import { h, FunctionComponent, ComponentChildren } from 'preact';

import style from './FieldRow.css';

interface Props {
  children: ComponentChildren;
  stacked?: boolean;
}

const FieldRow: FunctionComponent<Props> = ({
  children = null,
  stacked = false,
}: Props) => (
  <div
    className={`${style.fieldrow} ${
      stacked ? 'field-row' : 'field-row-stacked'
    }`}
  >
    {children}
  </div>
);

export default FieldRow;
