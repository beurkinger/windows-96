import { h, FunctionComponent, RefObject } from 'preact';

import style from './TitleBar.css';

export interface Props {
  isInactive?: boolean;
  isMaximized?: boolean;
  onClickMinimize?: () => void;
  onClickMaximize?: () => void;
  onClickRestore?: () => void;
  onClickHelp?: () => void;
  onClickClose: () => void;
  innerRef?: RefObject<HTMLDivElement>;
  title: string;
}

const TitleBar: FunctionComponent<Props> = ({
  isInactive = false,
  isMaximized = false,
  onClickMinimize,
  onClickMaximize,
  onClickRestore,
  onClickHelp,
  onClickClose,
  innerRef,
  title,
}: Props) => (
  <div
    className={`${style.titlebar} title-bar ${isInactive ? 'inactive' : ''}`}
    ref={innerRef}
  >
    <div className="title-bar-text">{title}</div>
    <div className="title-bar-controls">
      {onClickMinimize && (
        <button aria-label="Minimize" onClick={onClickMinimize} />
      )}
      {!isMaximized && onClickMaximize && (
        <button aria-label="Maximize" onClick={onClickMaximize} />
      )}
      {isMaximized && onClickRestore && (
        <button aria-label="Restore" onClick={onClickRestore} />
      )}
      {onClickHelp && <button aria-label="Help" onClick={onClickHelp} />}
      <button aria-label="Close" onClick={onClickClose} />
    </div>
  </div>
);

export default TitleBar;
