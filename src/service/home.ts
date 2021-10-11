import { request } from '@/utils/request';

interface EmptyObject {}
/**
 * 获取首页信息
 */
export function apiGetDashboard(): Promise<any> {
  return request<EmptyObject>({
    method: 'POST',
    url: '/admin/getDashboard',
  });
}

