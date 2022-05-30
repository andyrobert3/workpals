import { Flex, Image, Box } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<Flex paddingY="8px" marginTop="24px" justifyContent="space-between">
			<Image
				src="./wp-icon.png"
				alt="WorkPals Icon"
				width="48px"
				height="40px"
			/>
		</Flex>
	);
};

export default Navbar;
