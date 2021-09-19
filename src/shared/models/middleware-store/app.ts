import theme from "@/infrastructure/models/theme";

interface IAppMiddleware{
	theme: theme,
	toggleTheme: ()=> void
}

export default IAppMiddleware;