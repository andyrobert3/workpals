import { Box, Button, Flex, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";

const Navbar = () => {
	return (
		<Flex paddingY="8px" marginTop="24px" justifyContent="space-between">
			<Image src="./wp-icon.png" alt="WorkPals Icon" width="40px" />
			<Box>Menu Box</Box>
		</Flex>
	);
};

const Home: NextPage = () => {
	const handleJoinDiscord = useCallback(() => {}, []);

	const handleFollowUs = useCallback(() => {
		window.open(
			"https://twitter.com/intent/follow?screen_name=WorkpalsNFT",
			"_blank"
		);
	}, []);

	return (
		<Flex
			flexDir="column"
			flex={1}
			backgroundColor="#CCCCCC"
			minH="100vh"
			paddingX="20px"
		>
			<Head>
				<title>WorkPals NFT</title>
			</Head>
			<Navbar />
			<Flex
				flexDir="column"
				justifyContent="center"
				alignItems="center"
				marginBottom="16px"
				marginTop="20px"
			>
				<Image maxW="80%" src="/workpals-logo.png" alt="Workpals Icon" />
			</Flex>
			<Button backgroundColor="#2D151E" height="50px" isDisabled={true}>
				Join Discord
			</Button>
			<Button
				backgroundColor="#CCCCCC"
				textColor="black"
				borderColor="#2D151E"
				borderWidth={3}
				marginTop="12px"
				height="50px"
				onClick={handleFollowUs}
			>
				Follow Us
			</Button>
			<Image
				src="/silhouette.png"
				marginTop="54px"
				width="100%"
				alt="art sneak-peek"
				alignSelf="center"
			/>
		</Flex>
	);
};

export default Home;
