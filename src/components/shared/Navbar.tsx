import { Flex, Image, Button, useBreakpointValue } from "@chakra-ui/react";
import { useCallback } from "react";

type Dimensions = {
	width: string;
	height: string;
};

const SocialMediaIcon = ({
	icon,
	onClick,
}: {
	icon: string;
	onClick: () => void;
}) => {
	return (
		<Button
			backgroundColor="primary"
			alignSelf="center"
			width="52px"
			height="52px"
			borderRadius="16px"
			padding="0"
			onClick={onClick}
		>
			<Image src={icon} alt={icon} />
		</Button>
	);
};

const Navbar = () => {
	const logoUri = useBreakpointValue({
		base: "./wp-icon.png",
		lg: "./workpals-logo.png",
	});
	const dimensions = useBreakpointValue({
		base: {
			width: "40px",
			height: "40px",
		},
		md: {
			width: "90px",
			height: "85px",
		},
		lg: {
			width: "260px",
			height: "76px",
		},
	});

	const handleTwitterClick = useCallback(() => {
		window.open("https://twitter.com/WorkpalsNFT", "_blank");
	}, []);

	const handleDiscordClick = useCallback(() => {}, []);

	return (
		<Flex paddingY="8px" marginTop="24px" justifyContent="space-between">
			<Image
				src={logoUri}
				alt="WorkPals Icon"
				width={dimensions?.width}
				height={dimensions?.height}
			/>
			<Flex gap="0.75rem">
				<SocialMediaIcon
					icon="./twitter-icon.svg"
					onClick={handleTwitterClick}
				/>
				{/* <SocialMediaIcon icon="./discord-icon.svg" onClick={() => {}} /> */}
			</Flex>
		</Flex>
	);
};

export default Navbar;
