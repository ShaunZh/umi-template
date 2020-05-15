/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-13 20:32:13
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-15 16:30:04
 */
//config/route.ts
export const routes = [
  {
    path: '/user',
    component: '../layouts/BlankLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            name: '欢迎',
            exact: true,
            component: './welcome',
          },

          { path: '/live', redirect: '/live/index' },
          {
            path: '/live',
            name: '直播间管理',
            routes: [
              {
                path: '/live/index',
                name: '直播间理',
                hideInMenu: true,
                component: './live/index/index',
                // access: 'live/index',
              },
              {
                path: 'create',
                component: './live/create',
                hideInMenu: true,
                name: '创建直播间',
                // access: 'live/create',
              },
              {
                path: 'edit',
                component: './live/edit',
                name: '编辑直播间',
                hideInMenu: true,
                // access: 'live/edit',
              },
              {
                path: 'manage',
                component: './live/manage',
                name: '管理直播间',
                hideInMenu: true,
                // access: 'live/manage',
              },
            ],
          },
          {
            path: '/interact',
            name: '互动管理', // 兼容此写法
            // access: 'interact',
            routes: [
              {
                path: 'comment',
                component: './interact/comment',
                exact: true,
                name: '弹幕评论管理',
                // access: 'interact/comment',
              },
              {
                path: 'other',
                component: './interact/other',
                exact: true,
                name: '其他互动管理',
                // access: 'interact/other',
              },
            ],
          },
          {
            path: '/system',
            name: '系统管理',
            // access: 'system',
            routes: [
              {
                path: 'statistic',
                component: './system/statistic',
                exact: true,
                name: '数据统计',
                // access: 'system/statistic',
              },
            ],
          },
        ],
      },
    ],
  },
  // { exact: true, path: '/', redirect: '/home' },

  // {
  //   path: '/home',
  //   exact: true,
  //   component: '@/pages/home',
  //   menu: {
  //     name: 'home', // 兼容此写法
  //   },
  //   layout: {
  //     hideNav: true,
  //   },
  //   access: 'home',
  // },
  // {
  //   path: '/page1',
  //   component: '@/pages/page1',
  //   exact: true,
  //   menu: {
  //     name: 'page1', // 兼容此写法
  //   },
  //   access: 'page1',
  // },
  // {
  //   path: '/page2',
  //   component: '@/pages/page2',
  //   exact: true,
  //   menu: {
  //     name: 'page2', // 兼容此写法
  //   },
  //   access: 'page2',
  // },
];
