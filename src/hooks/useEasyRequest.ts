import { useRequest } from 'umi'
const useEasyRequest = (service: any, options?: any): any => {
    const result = useRequest(service, options);
    return {
        ...result
    }
}

export default useEasyRequest