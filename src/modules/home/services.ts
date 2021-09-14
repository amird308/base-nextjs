import {HOME_API} from "@/constants/api";
import IResponse from "@/infrastructure/models/response";
import mainApi from "@/infrastructure/http-client-main";
import {IGetSectionsResponse} from "./models/get-sections-response";

class HomeService {
	getSections = () => mainApi.get<IResponse<IGetSectionsResponse>>(HOME_API.GET_SECTIONS);
}

export default new HomeService();