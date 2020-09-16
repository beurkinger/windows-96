import { h, FunctionComponent } from 'preact';

import { AppId, appList } from '../../../data/appList';
import Menu from '../Menu/Menu';

import style from './StartMenu.css';

interface Props {
  onSelect: (appId: AppId) => void;
}

const StartMenu: FunctionComponent<Props> = ({ onSelect }: Props) => {
  const handleOnSelect = (appId: string) => onSelect(appId as AppId);
  return (
    <div className={style.startMenu}>
      <Menu
        onSelect={handleOnSelect}
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
                                      value: appList.cdPlayer.id,
                                    },
                                    {
                                      label: appList.soundRecorder.name,
                                      iconId: appList.soundRecorder.iconId,
                                      value: appList.soundRecorder.id,
                                    },
                                    {
                                      label: appList.volumeControl.name,
                                      iconId: appList.volumeControl.iconId,
                                      value: appList.volumeControl.id,
                                    },
                                    {
                                      label: appList.mediaPlayer.name,
                                      iconId: appList.mediaPlayer.iconId,
                                      value: appList.mediaPlayer.id,
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
                                      value: appList.defrag.id,
                                    },
                                    {
                                      label: appList.scandisk.name,
                                      iconId: appList.scandisk.iconId,
                                      value: appList.scandisk.id,
                                    },
                                  ],
                                ],
                              },
                            },
                            {
                              label: appList.calc.name,
                              iconId: appList.calc.iconId,
                              value: appList.calc.id,
                            },
                            {
                              label: appList.hyperterminal.name,
                              iconId: appList.hyperterminal.iconId,
                              value: appList.hyperterminal.id,
                            },
                            {
                              label: appList.notepad.name,
                              iconId: appList.notepad.iconId,
                              value: appList.notepad.id,
                            },
                            {
                              label: appList.register.name,
                              iconId: appList.register.iconId,
                              value: appList.register.id,
                            },
                            {
                              label: appList.msPaint.name,
                              iconId: appList.msPaint.iconId,
                              value: appList.msPaint.id,
                            },
                            {
                              label: appList.phoneDialer.name,
                              iconId: appList.phoneDialer.iconId,
                              value: appList.phoneDialer.id,
                            },
                            {
                              label: appList.wordpad.name,
                              iconId: appList.wordpad.iconId,
                              value: appList.wordpad.id,
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
                      value: appList.exchange.id,
                    },
                    {
                      label: appList.msDos.name,
                      iconId: appList.msDos.iconId,
                      value: appList.msDos.id,
                    },
                    {
                      label: appList.msn.name,
                      iconId: appList.msn.iconId,
                      value: appList.msn.id,
                    },
                    {
                      label: appList.explorer.name,
                      iconId: appList.explorer.iconId,
                      value: appList.explorer.id,
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
                      value: appList.controlPanel.id,
                    },
                    {
                      label: appList.printers.name,
                      iconId: appList.printers.iconId,
                      value: appList.printers.id,
                    },
                    {
                      label: appList.taskbar.name,
                      iconId: appList.taskbar.iconId,
                      value: appList.taskbar.id,
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
                      value: appList.find.id,
                    },
                    {
                      label: 'Computers...',
                      iconId: appList.findComputer.iconId,
                      value: appList.findComputer.id,
                    },
                  ],
                ],
              },
            },
            {
              label: appList.help.name,
              iconId: appList.help.iconId,
              value: appList.help.id,
            },
            {
              label: appList.run.name,
              iconId: appList.run.iconId,
              value: appList.run.id,
            },
          ],
          [
            {
              label: appList.shutdown.name,
              iconId: appList.shutdown.iconId,
              value: appList.shutdown.id,
            },
          ],
        ]}
      />
    </div>
  );
};

export default StartMenu;
