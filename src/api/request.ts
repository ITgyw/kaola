import { axiosInstance } from "./config";
import {
    URL_GOODS
} from './url'

export const getGoodsRequest =
    () => axiosInstance.get(URL_GOODS)