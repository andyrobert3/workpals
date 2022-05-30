import { Flex, Image, Box, Center, Button } from "@chakra-ui/react";
import { useCallback } from "react";
import { isTablet, isMobile, isDesktop } from "react-device-detect";

type Dimensions = {
	width: string;
	height: string;
};

const getLogoUri = (): string => {
	return isDesktop ? "./workpals-logo.png" : "./wp-icon.png";
};

const getLogoDimensions = (): Dimensions => {
	if (isMobile) {
		return {
			width: "40px",
			height: "40px",
		};
	} else if (isTablet) {
		return {
			width: "90px",
			height: "85px",
		};
	} else {
		return {
			width: "260px",
			height: "76px",
		};
	}
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
	const dimensions = getLogoDimensions();
	const logoUri = getLogoUri();

	const handleTwitterClick = useCallback(() => {
		window.open("https://twitter.com/WorkpalsNFT", "_blank");
	}, []);

	const handleDiscordClick = useCallback(() => {}, []);

	return (
		<Flex paddingY="8px" marginTop="24px" justifyContent="space-between">
			<Image
				src={logoUri}
				alt="WorkPals Icon"
				width={dimensions.width}
				height={dimensions.height}
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
