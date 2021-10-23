export default interface IUserLoginResponse {
    user: {
        email: string
        name: string
        token: string
    }
}