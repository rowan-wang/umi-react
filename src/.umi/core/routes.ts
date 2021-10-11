// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/rowan/Desktop/umi-react/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "exact": true,
    "redirect": "/admin/dashboard"
  },
  {
    "path": "/login",
    "component": require('@/pages/login').default,
    "exact": true
  },
  {
    "path": "/admin",
    "component": require('@/layouts/basicLayout').default,
    "routes": [
      {
        "name": "Dashboard",
        "path": "/admin/dashboard",
        "component": require('@/pages/dashboard').default,
        "exact": true
      },
      {
        "name": "列表",
        "path": "/admin/list",
        "component": require('@/pages/index').default,
        "routes": [
          {
            "name": "首页",
            "path": "/admin/list/list2",
            "component": require('@/pages/index').default,
            "exact": true
          }
        ]
      }
    ]
  },
  {
    "path": "/*",
    "component": require('@/pages/404').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
