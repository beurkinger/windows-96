import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import OpenWindowsContext from '../../../context/OpenWindowsContext';
import Desktop from '../../shared/Desktop/Desktop';

const DesktopContainer: FunctionComponent = () => {
  const { openApp } = useContext(OpenWindowsContext);
  return <Desktop openApp={openApp} />;
};

export default DesktopContainer;
