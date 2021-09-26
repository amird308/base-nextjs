import IResponse from "@/infrastructure/models/response";
import mainApi from "@/infrastructure/http-client-main";
import {IGetSectionsResponse} from "./models/get-sections-response";
import {HOME_API} from "@/modules/home/constants";

class HomeService {
	getSections = () => mainApi.get<IResponse<IGetSectionsResponse>>(HOME_API.GET_SECTIONS);
}

export default new HomeService();