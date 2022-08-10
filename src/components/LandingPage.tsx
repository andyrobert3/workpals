import {
	Box,
	Button,
	Flex,
	Image,
	Heading,
	Text,
	Stack,
} from "@chakra-ui/react";
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
		<Flex flexDir="column" flex={1} width="100%" alignItems="center">
			<Heading
				textTransform="uppercase"
				textAlign="center"
				mb="2rem"
				noOfLines={2}
				maxW="300px"
				color="primary"
			>
				FREE MINT COMING SOON
			</Heading>
			<Text
				maxW={{ base: undefined, md: "475px" }}
				color="black"
				mb="16px"
				textAlign="center"
			>
				1st NFT project that allows you{" "}
				<span style={{ fontWeight: "bold" }}>to get shit done</span>. Stay
				productive and accountable with your new work buddies, anytime and
				anywhere. ✨
			</Text>
			<Flex
				flexDir={{ base: "column", md: "row" }}
				justifyContent="center"
				width="100%"
				gap={{ base: "1rem", md: "2rem" }}
			>
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
				<Button
					backgroundColor="primary"
					height="50px"
					isDisabled={true}
					minW="200px"
					mb="24px"
				>
					Join Discord
				</Button>
			</Flex>
		</Flex>
	);
};

const WorkPalsLogo = () => {
	return (
		<Stack
			flexDir={{ base: "column", md: "row" }}
			flex={1}
			maxW="1000px"
			spacing={"16px"}
			alignItems="center"
		>
			<Box width={{ base: "80%", md: "33.5%" }}>
				<Image src="./reveal/owl.png" alt="owl" />
			</Box>
			<Box width={{ base: "80%", md: "27.5%" }}>
				<Image src="./reveal/tiger.png" alt="tiger" />
			</Box>
			<Box width={{ base: "80%", md: "22.5%" }}>
				<Image src="./reveal/rabbit.png" alt="rabbit" />
			</Box>
			<Box width={{ base: "80%", md: "21.5%" }}>
				<Image src="./reveal/dog.png" alt="dog" />
			</Box>
		</Stack>
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
			<Flex flexDir={{ base: "column" }} alignItems="center">
				<CallToActionSection />
				<WorkPalsLogo />
			</Flex>
		</Flex>
	);
};

export default LandingPage;
