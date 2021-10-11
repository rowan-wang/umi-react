import React, {useState}from 'react';
import ProLayout, {MenuDataItem} from '@ant-design/pro-layout';
import styles from './BasicLayout.less';
import { Link } from 'umi';
import { Avatar } from 'antd'
const BaseProLayout: React.FC = (props) => {
  const { children } = props;
  const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
    console.log(menuList)
    const result = menuList.map(item => {
      const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
      return localItem
    });
    return (window as any).routerMenu || result
  }
  return (
    <ProLayout
      {...props}
      location={{
        pathname: '/admin/home',
      }}
      breadcrumbRender={(routers = []) => {  
        return [
          {
            path: '/',
            breadcrumbName: '首页',
          },
          ...routers,
        ]
      }}
      menuDataRender={menuDataRender}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
            <span>{route.breadcrumbName}</span>
          );
      }}
      rightContentRender={() =>
        (
          <div>
            <Avatar src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" />
          </div>
        )
      }
      className={styles.baseProLayout}>
      
      <div className={styles.mainContent}>{children}</div>
    </ProLayout>
  )
}
export default BaseProLayout