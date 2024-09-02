import axios, { AxiosResponse, Method } from "axios";
import { AxiosResponseData } from "./axios.types";

const axiosInstance = axios.create({
    baseURL: 'https://potterhead-api.vercel.app/',
  });

  function handleError(error: unknown) {
    const err = error as Error;
    return { error: err.message };
  }

  const parseResponse = <TResponse>(response: AxiosResponse) => {
    const { status } = response;
    const ok = status >= 200 && status < 300;
    const data = response.data as AxiosResponseData<TResponse>;
    const message = data?.message ? data.message : ok ? '' : 'An error occurred';
    return { data, status, message, ok };
  };

  const parseDefaultErrorResponse = (message: string) => ({
    data: null,
    status: 500,
    ok: false,
    message,
  });

  async function axiosRequest<TResponse>(method: Method, path: string, payload?: Record<string, unknown>) {
    try {
      const payloadName = method === 'GET' ? 'params' : 'data';
      const axiosResponse = await axiosInstance(path, {
        method,
        [payloadName]: payload,
      });
      return parseResponse<TResponse>(axiosResponse);
    } catch (err) {
      const { error: errorMessage } = handleError(err);
      return parseDefaultErrorResponse(errorMessage);
    }
  }
  export const api = {
    get: <TResponse>(path: string, payload = {}) => {
      return axiosRequest<TResponse>('GET', path, payload);
    },
    post: <TResponse>(path: string, payload = {}) => {
      return axiosRequest<TResponse>('POST', path, payload);
    },
    patch: <TResponse>(path: string, payload = {}) => {
      return axiosRequest<TResponse>('PATCH', path, payload);
    },
    delete: <TResponse>(path: string, payload = {}) => {
      return axiosRequest<TResponse>('DELETE', path, payload);
    },
    put: <TResponse>(path: string, payload = {}) => {
      return axiosRequest<TResponse>('PUT', path, payload);
    },
  };
