import { AxiosRequestConfig } from 'axios';
import qs from 'qs';

import { APIError, Response } from '@/src/types';

import { axiosErrorHandler, axiosInstance } from '../axios/axios';

export const makeRequest = async <T = unknown, D = unknown>(params: AxiosRequestConfig<D>): Promise<Response<T>> => {
  const localParams = params;

  if (!localParams.paramsSerializer) {
    localParams.paramsSerializer = (queryParams) => qs.stringify(queryParams, { encode: false, indices: false });
  }

  try {
    const { status, data, headers } = await axiosInstance.request<T>(localParams);

    return { status, data, headers };
  } catch (err) {
    return axiosErrorHandler<T>(err as APIError);
  }
};
