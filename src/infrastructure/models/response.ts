interface IBaseResponse {
    results: boolean
    message: string
}

type IResponse<d = {}> = IBaseResponse & d;
export default IResponse;