import mainApi from "@/infrastructure/http-client-main";
import IResponse from "@/infrastructure/models/response";
import IUserLogin from "@/modules/login/models/IUserLogin";
import {LOGIN_API} from "@/modules/login/constants";
import IUserLoginResponse from "@/modules/login/models/IUserLoginResponse";

class LoginService {
    login = (user: IUserLogin) => mainApi.post<IResponse<IUserLoginResponse>>(LOGIN_API.LOGIN, user)
}

export default new LoginService();