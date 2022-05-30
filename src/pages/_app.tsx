import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-mono";

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
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
