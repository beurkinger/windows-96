import { h, FunctionComponent } from 'preact';

import Icon from '../Icon/Icon';
import Menu from '../Menu/Menu';

import style from './StartMenu.css';

const StartMenu: FunctionComponent = () => (
  <div className={style.startMenu}>
    <Menu
      onSelect={() => null}
      isLarge={true}
      options={[
        [
          {
            icon: <Icon iconId="programs" size={24} />,
            label: 'Programs',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    label: 'Accessories',
                    icon: <Icon iconId="programs" size={16} />,
                    value: '',
                    subMenu: {
                      options: [
                        [
                          {
                            label: 'Multimedia',
                            icon: <Icon iconId="programs" size={16} />,
                            value: '',
                            subMenu: {
                              options: [
                                [
                                  {
                                    label: 'CD Player',
                                    icon: <Icon iconId="cdPlayer" size={16} />,
                                    value: '',
                                  },
                                  {
                                    label: 'Sound Recorder',
                                    icon: <Icon iconId="sound" size={16} />,
                                    value: '',
                                  },
                                  {
                                    label: 'Volume Control',
                                    icon: <Icon iconId="volume" size={16} />,
                                    value: '',
                                  },
                                  {
                                    label: 'Windows Media Player',
                                    icon: (
                                      <Icon iconId="mediaPlayer" size={16} />
                                    ),
                                    value: '',
                                  },
                                ],
                              ],
                            },
                          },
                          {
                            label: 'System Tools',
                            icon: <Icon iconId="programs" size={16} />,
                            value: '',
                            subMenu: {
                              options: [
                                [
                                  {
                                    label: 'Disk Degragmenter',
                                    icon: <Icon iconId="defrag" size={16} />,
                                    value: '',
                                  },
                                  {
                                    label: 'ScanDisk',
                                    icon: <Icon iconId="scandisk" size={16} />,
                                    value: '',
                                  },
                                ],
                              ],
                            },
                          },
                          {
                            label: 'Calculator',
                            icon: <Icon iconId="calc" size={16} />,
                            value: '',
                          },
                          {
                            label: 'Hyper Terminal',
                            icon: <Icon iconId="hyperterminal"  size={16} />,
                            value: '',
                          },
                          {
                            label: 'Notepad',
                            icon: <Icon iconId="notepad" size={16} />,
                            value: '',
                          },
                          {
                            label: 'Online Registration',
                            icon: <Icon iconId="register" size={16} />,
                            value: '',
                          },
                          {
                            label: 'Paint',
                            icon: <Icon iconId="msPaint" size={16} />,
                            value: '',
                          },
                          {
                            label: 'Phone Dialer',
                            icon: <Icon iconId="phoneDialer" size={16} />,
                            value: '',
                          },
                          {
                            label: 'WordPad',
                            icon: <Icon iconId="wordpad" size={16} />,
                            value: '',
                          },
                        ],
                      ],
                    },
                  },
                  {
                    label: 'StartUp',
                    icon: <Icon iconId="programs" size={16} />,
                    value: '',
                  },
                  {
                    label: 'Microsoft Exchange',
                    icon: <Icon iconId="exchange" size={16} />,
                    value: '',
                  },
                  {
                    label: 'MS-DOS Prompt',
                    icon: <Icon iconId="msDos" size={16} />,
                    value: '',
                  },
                  {
                    label: 'The Microsoft Network',
                    icon: <Icon iconId="msn" size={16} />,
                    value: '',
                  },
                  {
                    label: 'Windows Explorer',
                    icon: <Icon iconId="explorer" size={16} />,
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            icon: <Icon iconId="documents" size={24} />,
            label: 'Documents',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    label: 'Readme',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                  {
                    label: 'Document',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            icon: <Icon iconId="settings" size={24} />,
            label: 'Settings',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    label: 'Control Panel',
                    icon: <Icon iconId="controlPanel" size={16} />,
                    value: '',
                  },
                  {
                    label: 'Printers',
                    icon: <Icon iconId="printers" size={16} />,
                    value: '',
                  },
                  {
                    label: 'Taskbar...',
                    icon: <Icon iconId="taskbar" size={16} />,
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            icon: <Icon iconId="find" size={24} />,
            label: 'Find',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    label: 'Files or Folders...',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                  {
                    label: 'Computer...',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            icon: <Icon iconId="help" size={24} />,
            label: 'Help',
            value: '',
          },
          {
            icon: <Icon iconId="run" size={24} />,
            label: 'Run',
            value: '',
          },
        ],
        [
          {
            icon: <Icon iconId="shutdown" size={24} />,
            label: 'Shutdown...',
            value: '',
          },
        ],
      ]}
    />
  </div>
);

export default StartMenu;
