import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface ObjectKeyDynamicI {
  [key: string]: string | number | Object | any;
}

class Base {
  private readonly axios: AxiosInstance;

  constructor(api: string, config?: AxiosRequestConfig) {
    this.axios = axios.create({
      baseURL: api,
      ...(config || {}),
    });
  }

  public params(params: ObjectKeyDynamicI): string {
    return Object.keys(params)
      .map((key) => {
        let value = params[key];
        value = typeof value == typeof {} ? JSON.stringify(value) : value;
        return `${key}=${value}`;
      })
      .join('&');
  }

  private getMessage(error: any): string {
    const response = error.response;
    const message =
      response && response.data && response.data.error
        ? response.data.error.message
        : error.message;
    return message;
  }

  protected get(
    url: string,
    params: ObjectKeyDynamicI = {},
    config: AxiosRequestConfig = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const _isParams = Object.keys(params).length > 0;
      this.axios
        .get(`${url}${_isParams ? `?${this.params(params)}` : ''}`, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(this.getMessage(error)));
    });
  }

  protected post(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axios
        .post(url, data, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(this.getMessage(error)));
    });
  }

  protected update(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axios
        .patch(url, data, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(this.getMessage(error)));
    });
  }

  protected delete(url: string, config: AxiosRequestConfig = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axios
        .delete(url, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(this.getMessage(error)));
    });
  }
}

export default Base;
