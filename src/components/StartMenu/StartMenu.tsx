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
            icon: <Icon size={24} />,
            label: 'Programs',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    label: 'Accessories',
                    icon: <Icon size={16} />,
                    value: '',
                    subMenu: {
                      options: [
                        [
                          {
                            label: 'Multimedia',
                            icon: <Icon size={16} />,
                            value: '',
                            subMenu: {
                              options: [
                                [
                                  {
                                    label: 'CD Player',
                                    icon: <Icon size={16} />,
                                    value: '',
                                  },
                                  {
                                    label: 'Sound Recorder',
                                    icon: <Icon size={16} />,
                                    value: '',
                                  },
                                  {
                                    label: 'Volume Control',
                                    icon: <Icon size={16} />,
                                    value: '',
                                  },
                                  {
                                    label: 'Windows Media Player',
                                    icon: <Icon size={16} />,
                                    value: '',
                                  },
                                ],
                              ],
                            },
                          },
                          {
                            label: 'System Tools',
                            icon: <Icon size={16} />,
                            value: '',
                            subMenu: {
                              options: [
                                [
                                  {
                                    label: 'Disk Degragmenter',
                                    icon: <Icon size={16} />,
                                    value: '',
                                  },
                                  {
                                    label: 'ScanDisk',
                                    icon: <Icon size={16} />,
                                    value: '',
                                  },
                                ],
                              ],
                            },
                          },
                          {
                            label: 'Calculator',
                            icon: <Icon size={16} />,
                            value: '',
                          },
                          {
                            label: 'Hyper Terminal',
                            icon: <Icon size={16} />,
                            value: '',
                          },
                          {
                            label: 'Notepad',
                            icon: <Icon size={16} />,
                            value: '',
                          },
                          {
                            label: 'Online Registration',
                            icon: <Icon size={16} />,
                            value: '',
                          },
                          {
                            label: 'Paint',
                            icon: <Icon size={16} />,
                            value: '',
                          },
                          {
                            label: 'Phone Dialer',
                            icon: <Icon size={16} />,
                            value: '',
                          },
                          {
                            label: 'WordPad',
                            icon: <Icon size={16} />,
                            value: '',
                          },
                        ],
                      ],
                    },
                  },
                  {
                    label: 'StartUp',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                  {
                    label: 'Microsoft Exchange',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                  {
                    label: 'MS-DOS Prompt',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                  {
                    label: 'The Microsoft Network',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                  {
                    label: 'Windows Explorer',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            icon: <Icon size={24} />,
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
            icon: <Icon size={24} />,
            label: 'Settings',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    label: 'Control Panel',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                  {
                    label: 'Printers',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                  {
                    label: 'Taskbar...',
                    icon: <Icon size={16} />,
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            icon: <Icon size={24} />,
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
            icon: <Icon size={24} />,
            label: 'Help',
            value: '',
          },
          {
            icon: <Icon size={24} />,
            label: 'Run',
            value: '',
          },
        ],
        [
          {
            icon: <Icon size={24} />,
            label: 'Shutdown',
            value: '',
          },
        ],
      ]}
    />
  </div>
);

export default StartMenu;
