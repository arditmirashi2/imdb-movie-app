import axios, { AxiosRequestConfig } from 'axios';
import queryString from 'query-string';
import { string } from 'yup';
import { IRequestResponse } from '../models/common';

const api = axios.create({});


interface RequestOptions {
    query?: any;
    url: string;
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH",
    headers?: any;
    data?: any;
}

class Request {
  static async doRequest(options: RequestOptions): Promise<IRequestResponse> {
    try {
      if (options.query) {
        const query = queryString.stringify(options.query, {
          arrayFormat: 'comma',
        });
        options.url = options.url + '?' + query;
        delete options.query;
      }
      const response = await api(options);
      return { success: true, payload: (response.data as any).results || response };
    } catch (error: any) {
      return {success: false, payload: error.message}
    }
  }
}

export default Request;
