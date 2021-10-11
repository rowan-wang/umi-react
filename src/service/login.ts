import { request } from '@/utils/request';

interface EmptyObject {}
/**
 * 登录
 */
export function apiLogin(data: any): Promise<any> {
  return request<EmptyObject>({
    method: 'POST',
    url: '/admin/login',
    data,
  });
}

