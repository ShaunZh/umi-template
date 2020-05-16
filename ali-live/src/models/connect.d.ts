import { MenuDataItem } from '@ant-design/pro-layout';
import { UserModelState } from './user';
import { StateType } from './login';
import { GlobalModelState } from './global';
import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';

export { GlobalModelState, SettingModelState, UserModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    settings?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  user: UserModelState;
  login: StateType;
  settings: SettingModelState;
  global: GlobalModelState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}
