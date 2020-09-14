import { h, FunctionComponent } from 'preact';

import { appList } from '../../data/appList';
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
            label: 'Programs',
            iconId: 'programs',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    iconId: 'programs',
                    label: 'Accessories',
                    value: '',
                    subMenu: {
                      options: [
                        [
                          {
                            label: 'Multimedia',
                            iconId: 'programs',
                            value: '',
                            subMenu: {
                              options: [
                                [
                                  {
                                    label: appList.cdPlayer.name,
                                    iconId: appList.cdPlayer.iconId,
                                    value: '',
                                  },
                                  {
                                    label: appList.soundRecorder.name,
                                    iconId: appList.soundRecorder.iconId,
                                    value: '',
                                  },
                                  {
                                    label: appList.volumeControl.name,
                                    iconId: appList.volumeControl.iconId,
                                    value: '',
                                  },
                                  {
                                    label: appList.mediaPlayer.name,
                                    iconId: appList.mediaPlayer.iconId,
                                    value: '',
                                  },
                                ],
                              ],
                            },
                          },
                          {
                            label: 'System Tools',
                            iconId: 'programs',
                            value: '',
                            subMenu: {
                              options: [
                                [
                                  {
                                    label: appList.defrag.name,
                                    iconId: appList.defrag.iconId,
                                    value: '',
                                  },
                                  {
                                    label: appList.scandisk.name,
                                    iconId: appList.scandisk.iconId,
                                    value: '',
                                  },
                                ],
                              ],
                            },
                          },
                          {
                            label: appList.calc.name,
                            iconId: appList.calc.iconId,
                            value: '',
                          },
                          {
                            label: appList.hyperterminal.name,
                            iconId: appList.hyperterminal.iconId,
                            value: '',
                          },
                          {
                            label: appList.notepad.name,
                            iconId: appList.notepad.iconId,
                            value: '',
                          },
                          {
                            label: appList.register.name,
                            iconId: appList.register.iconId,
                            value: '',
                          },
                          {
                            label: appList.msPaint.name,
                            iconId: appList.msPaint.iconId,
                            value: '',
                          },
                          {
                            label: appList.phoneDialer.name,
                            iconId: appList.phoneDialer.iconId,
                            value: '',
                          },
                          {
                            label: appList.wordpad.name,
                            iconId: appList.wordpad.iconId,
                            value: '',
                          },
                        ],
                      ],
                    },
                  },
                  {
                    label: 'StartUp',
                    iconId: 'programs',
                    value: '',
                  },
                  {
                    label: appList.exchange.name,
                    iconId: appList.exchange.iconId,
                    value: '',
                  },
                  {
                    label: appList.msDos.name,
                    iconId: appList.msDos.iconId,
                    value: '',
                  },
                  {
                    label: appList.msn.name,
                    iconId: appList.msn.iconId,
                    value: '',
                  },
                  {
                    label: appList.explorer.name,
                    iconId: appList.explorer.iconId,
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            label: 'Documents',
            iconId: 'documents',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    label: 'Readme',
                    iconId: 'notepadDoc',
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            label: 'Settings',
            iconId: 'settings',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    label: appList.controlPanel.name,
                    iconId: appList.controlPanel.iconId,
                    value: '',
                  },
                  {
                    label: appList.printers.name,
                    iconId: appList.printers.iconId,
                    value: '',
                  },
                  {
                    label: appList.taskbar.name,
                    iconId: appList.taskbar.iconId,
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            label: 'Find',
            iconId: 'find',
            value: '',
            subMenu: {
              options: [
                [
                  {
                    label: 'Files or Folders...',
                    iconId: appList.find.iconId,
                    value: '',
                  },
                  {
                    label: 'Computers...',
                    iconId: appList.findComputer.iconId,
                    value: '',
                  },
                ],
              ],
            },
          },
          {
            label: appList.help.name,
            iconId: appList.help.iconId,
            value: '',
          },
          {
            label: appList.run.name,
            iconId: appList.run.iconId,
            value: '',
          },
        ],
        [
          {
            label: appList.shutdown.name,
            iconId: appList.shutdown.iconId,
            value: '',
          },
        ],
      ]}
    />
  </div>
);

export default StartMenu;
