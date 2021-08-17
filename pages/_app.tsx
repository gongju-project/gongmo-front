import { NextComponentType } from "next"
import { AppContext, AppInitialProps, AppProps } from "next/app"
import '../styles/globals.css'
const Resume: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
	return <>
		<Component {...pageProps} />
	</>
}

Resume.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
	let pageProps = {}

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx)
	}

	return { pageProps }
}

export default Resume