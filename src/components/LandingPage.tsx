import { Box, Button, Flex, Image, Heading, Tooltip } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import Navbar from "./shared/Navbar";

const CallToActionSection = () => {
	const handleFollowUs = useCallback(() => {
		window.open(
			"https://twitter.com/intent/follow?screen_name=WorkpalsNFT",
			"_blank"
		);
	}, []);

	return (
		<Flex flexDir="column" flex={1} width="100%">
			<Heading
				textTransform="uppercase"
				textAlign="center"
				mb="2rem"
				color="primary"
			>
				Coming Soon.
			</Heading>
			<Flex
				flexDir={{ base: "column", md: "row" }}
				justifyContent="center"
				width="100%"
				gap={{ base: "1rem", md: "2rem" }}
			>
				<Button
					backgroundColor="primary"
					height="50px"
					isDisabled={true}
					minW="200px"
				>
					Join Discord
				</Button>
				<Button
					backgroundColor="#CCCCCC"
					textColor="primary"
					borderColor="primary"
					borderWidth={3}
					height="50px"
					minW="200px"
					onClick={handleFollowUs}
				>
					Follow Us
				</Button>
			</Flex>
		</Flex>
	);
};

const WorkPalsLogo = () => {
	return (
		<Image
			src="/silhouette.png"
			marginTop="3.5rem"
			marginBottom="5rem"
			width="100%"
			maxW="900px"
			alt="art sneak-peek"
			alignSelf="center"
		/>
	);
};

const MetadataHead = () => {
	return (
		<Head>
			<title>WorkPals NFT</title>
			<meta name="keywords" content="NFT, Career, Mental Health, Community" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content="WorkPals NFT" />
			<meta
				property="og:description"
				content="Your go-to NFT community for all things related to 💼 Career Development & ✨ Mental Health at work"
			/>
			<meta name="twitter:title" content="WorkPals NFT" />
			<meta
				name="twitter:description"
				content="Your go-to NFT community for all things related to 💼 Career Development & ✨ Mental Health at work"
			/>
		</Head>
	);
};

const LandingPage: NextPage = () => {
	return (
		<Flex
			flexDir="column"
			flex={1}
			backgroundColor="#CCCCCC"
			minH="100vh"
			overflowY="hidden"
			paddingX={{ base: "24px", md: "36px", lg: "56px" }}
		>
			<MetadataHead />
			<Navbar />
			<Flex flexDir={{ base: "column", md: "column-reverse" }}>
				<WorkPalsLogo />
				<CallToActionSection />
			</Flex>
		</Flex>
	);
};

export default LandingPage;
