import mainApi from "@/infrastructure/http-client-main";
import IResponse from "@/infrastructure/models/response";
import {API} from "@/constants/api";

class Services {
    checkToken=(): Promise<boolean>=> {
        return new Promise((resolve, reject)=>{
            mainApi.get<IResponse>(API.CHECK_TOKEN).then((res)=>{
                if(res) {
                    resolve(true);    
                }
            }).catch((err)=>{
                reject(err);
            });
        });
    };
}

export default new Services();