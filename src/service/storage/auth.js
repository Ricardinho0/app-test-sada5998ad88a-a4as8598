import AsyncStorage from "@react-native-async-storage/async-storage";
import { Utils } from "../../utils";

import * as Updates from 'expo-updates';


export class StorageService {
    static async getToken(){
        const user = await AsyncStorage.getItem(Utils.storate_locales.auth);
        const token = user ? JSON.parse(user) : null 
        if(token?.access_token){
            return token.access_token
        }
        return null
    }

    static async saveToken(data){
        if(!data){
            return
        }
        await AsyncStorage.setItem(Utils.storate_locales.auth, JSON.stringify(data));
    }

    static async getUser(){
        const user = await AsyncStorage.getItem(Utils.storate_locales.auth);
        const token = user?.revenda ? JSON.parse(user) : null
        if(token){
            return token
        }
        return null
    } 

    static async logout(){
        await AsyncStorage.removeItem(Utils.storate_locales.auth);
        Updates.reloadAsync()
    }
} 