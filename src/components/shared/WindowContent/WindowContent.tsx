import { h, FunctionComponent, ComponentChild } from 'preact';

import style from './WindowContent.css';

interface Props {
  body: ComponentChild;
  menu?: ComponentChild;
  footer?: ComponentChild;
}

const WindowContent: FunctionComponent<Props> = ({
  body,
  menu,
  footer,
}: Props) => (
  <div className={style.windowContent}>
    <div className={style.windowContentMenu}>{menu}</div>
    <div className={style.windowContentBody}>{body}</div>
    <div className={style.windowContentFooter}>{footer}</div>
  </div>
);

export default WindowContent;
