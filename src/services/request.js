import { api } from '~/services/api';
import qs from 'qs';

const getConfigBase = (url, method, body, queryParams) => {
  const header = {
    'Content-Type': 'application/json;charset=utf-8',
  };

  const config = {
    url: url,
    method: method,
    headers: header,
    data: body,
    params: queryParams,
    paramsSerializer: (params) => {
      return qs.stringify(params);
    },
  };

  return config;
};

const requestBase = ({ url, method, body }) => {
  const config = getConfigBase(url, method, body);
  return api.request(config);
};

export { requestBase };
