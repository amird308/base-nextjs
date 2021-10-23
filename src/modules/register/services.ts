import mainApi from "@/infrastructure/http-client-main";
import {REGISTER_API} from "@/modules/register/constants";
import IUserData from "@/modules/register/models/IUserData";
import IResponse from "@/infrastructure/models/response";

class RegisterService {
    register = (user: IUserData) => mainApi.post<IResponse>(REGISTER_API.REGISTER, user)
}

export default new RegisterService();