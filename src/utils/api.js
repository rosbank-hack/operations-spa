import axios from 'axios';
import { serializeQueryParams } from 'utils/queryParams';
import config from '../config';

export const makeRequest = ({ url, type = 'post', baseURL = config.backendUrl, isQuery = false }) => (
  data,
  query,
  requestConfig
) =>
  new Promise((resolve, reject) => {
    const params = isQuery ? `${url}?${serializeQueryParams(query)}` : `${url}/${query}`;

    axios({
      method: type,
      baseURL,
      url: query ? params : url,
      data: type === 'get' ? {} : data,
      headers: {},
      dataType: 'json',
      responseType: 'json',
      timeout: 30000,
      ...requestConfig,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => reject(error));
  });

const api = {
  search: makeRequest({ url: '/operations/search' }),
  getItem: makeRequest({ url: '/operations/', type: 'get' }),
  addTransaction: makeRequest({ url: '/transactions', type: 'post', baseURL: config.transactionServiceUrl }),
};

export default api;
