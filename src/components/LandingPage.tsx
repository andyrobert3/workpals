import { Box, Button, Flex, Image, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import Navbar from "./shared/Navbar";

const Home: NextPage = () => {
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
			<Image
				src="/silhouette.png"
				marginTop="3.5rem"
				marginBottom="5rem"
				width="100%"
				alt="art sneak-peek"
				alignSelf="center"
			/>
			<Flex flexDir="column" flex={1} width="100%">
				<Heading textTransform="uppercase" textAlign="center" mb="2rem">
					Coming Soon.
				</Heading>
				<Button
					backgroundColor="#2D151E"
					height="50px"
					isDisabled={true}
					mb="1rem"
				>
					Join Discord
				</Button>
				<Button
					backgroundColor="#CCCCCC"
					textColor="black"
					borderColor="#2D151E"
					borderWidth={3}
					height="50px"
					onClick={handleFollowUs}
				>
					Follow Us
				</Button>
			</Flex>
		</Flex>
	);
};

export default Home;
