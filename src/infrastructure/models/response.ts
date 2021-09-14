interface IResponse<d = any> {
	Data: d,
	Meta: {
		Success: boolean,
		Code: number,
		Messages: string[],
	},
}
export default IResponse;