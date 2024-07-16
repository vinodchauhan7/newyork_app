
import { client } from "../lib/networkClient";

type callAPIProps = {
        method: string
        url: string
        params: Object | undefined
        baseURL: string | undefined
}

const callAPI = async (config: callAPIProps) => {
    const response = await client(config);
    return response;
}

type getMethodProps = {
    url: string,
    params?: Object | undefined
    
}
export const get= async ({
    url,
    params
} : getMethodProps) => {
    const config = {
      baseURL: process.env.REACT_APP_API_HOST,
      method: 'GET',
      url,
      params,
    };
    return await callAPI(config);
    
  };