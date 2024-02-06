import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Utils } from "../utils";
import { StorageService } from "./storage/auth";

const api = axios.create({
    baseURL: Utils.base_urls.main,
});
async function intercepter(config) {
    const user = await StorageService.getToken();
        if(user){
            config.headers.Authorization = `Bearer ${user}`;
        }
    return config;
}

api.interceptors.request.use(intercepter);
export default api;