/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-13 20:32:13
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-15 10:53:38
 */
//config/route.ts
export const routes = [
  {
    path: '/user',
    component: '@/layouts/BlankLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: '@/pages/user/login',
      },
    ],
  },
  {
    path: '/',
    component: '@/layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        routes: [
          {
            path: '/welcome',
            exact: true,
            component: '@/pages/welcome',
          },
          {
            path: '/live',
            exact: true,
            menu: {
              name: '直播管理', // 兼容此写法
            },
            access: 'live',
            routes: [
              {
                path: '/live/index',
                component: '@/pages/live/index',
                exact: true,
                access: 'live/index',
              },
              {
                path: '/live/create',
                component: '@/pages/live/create',
                exact: true,
                access: 'live/create',
              },
              {
                path: '/live/edit',
                component: '@/pages/live/edit',
                exact: true,
                access: 'live/edit',
              },
              {
                path: '/live/manage',
                component: '@/pages/live/manage',
                exact: true,
                access: 'live/manage',
              },
            ],
          },
          {
            path: '/interact',
            exact: true,
            menu: {
              name: '互动管理', // 兼容此写法
            },
            access: 'interact',
            routes: [
              {
                path: '/interact/comment',
                component: '@/pages/interact/comment',
                exact: true,
                access: 'interact/comment',
              },
              {
                path: '/interact/other',
                component: '@/pages/interact/other',
                exact: true,
                access: 'interact/other',
              },
            ],
          },
          {
            path: '/system',
            exact: true,
            menu: {
              name: '系统管理',
            },
            access: 'system',
            routes: [
              {
                path: '/system/statistic',
                component: '@/pages/system/statistic',
                exact: true,
                access: 'system/statistic',
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
