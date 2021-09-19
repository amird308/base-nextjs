import IUser from "@/infrastructure/models/entity/user";
import status from "@/infrastructure/models/status";

interface IUserInfo{
    status: status,
    information: IUser,
}

export default IUserInfo;