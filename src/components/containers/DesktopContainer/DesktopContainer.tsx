import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import OpenWindowsContext from '../../../context/OpenWindowsContext';
import Desktop from '../../shared/Desktop/Desktop';

const DesktopContainer: FunctionComponent = () => {
  const { addWindow } = useContext(OpenWindowsContext);
  return <Desktop addWindow={addWindow} />;
};

export default DesktopContainer;
