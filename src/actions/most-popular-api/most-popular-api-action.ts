import { most_popular_articals_api } from "../../constants";
import { get } from "../networkCalls"

const API_KEY = process.env.REACT_APP_NY_TIME_API_SECRET as string

export const onGetMostPopularArticalsApiCall = async (articalSize: number) => {
    const apiCall = most_popular_articals_api+`/${articalSize}.json?api-key=${API_KEY}`;
    const response = await get({url: apiCall, params: {}});
    return response.data;
}