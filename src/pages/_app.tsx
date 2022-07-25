import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-mono";
import Script from "next/script";

const theme = extendTheme({
	fonts: {
		heading: "DM Mono",
		body: "DM Mono",
	},
	colors: {
		primary: "#388170",
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			{/* Global site tag (gtag.js) - Google Analytics */}
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-V8KCVEWENM"
				strategy="afterInteractive"
			></Script>
			<Script id="google-analytics" strategy="afterInteractive">
				{`		
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-V8KCVEWENM');
				`}
			</Script>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
