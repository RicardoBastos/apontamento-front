import * as qs from 'qs';
import { PathLike } from 'fs';

export const apiConfig = {
  returnRejectedPromiseOnError: true,
  timeout: 30000,
  baseURL: process.env.REACT_APP_API,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
  paramsSerializer: (params: PathLike): string =>
    qs.stringify(params, { indices: false }),
};
