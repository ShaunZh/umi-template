/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-14 14:12:59
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-14 15:53:59
 */
export function getInitialState() {
  // 1. 该函数是在整个应用最开始执行，返回值会作为全局共享的数据，
  // 可以在此处获取该项目的公共数据，如权限信息，先可以将权限信息全部设置为无权限（false），等用户登录后再更新该权限信息
  const data = {
    auth: {
      login: true,
      home: true,
      page1: false,
    },
  };
  return data;
}

export type InitialState = ReturnType<typeof getInitialState>;
