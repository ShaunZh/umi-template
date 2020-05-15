import { history, Reducer, Effect } from 'umi';

import { fakeAccountLogin } from '@/services/login';
import { setToken } from '@/utils/token';
import { setAuthority } from '@/utils/authority';

export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface LoginModelType {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<StateType>;
  };
}

const Model: LoginModelType = {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      try {
        const response = yield call(fakeAccountLogin, payload);
        yield put({
          type: 'changeLoginStatus',
          payload: response.result,
        });
        setToken('Bearer ' + response.result.token);
        // 设置用户的权限列表
        setAuthority(response.result.authority);
        // Login successfully
        history.replace('/welcome');
      } catch (e) {}
    },

    logout() {
      // Note: There may be security issues, please note
      if (window.location.pathname !== '/user/login') {
        history.replace({
          pathname: '/user/login',
        });
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};

export default Model;
