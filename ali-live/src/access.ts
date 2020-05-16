/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-14 13:56:36
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-14 16:05:13
 */

import { InitialState } from './app';

export default function(initialState: InitialState) {
  console.log('initialState: ', initialState);
  // 获取权限列表
  const { auth } = initialState;
  return auth;
}
