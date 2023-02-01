import {
  Spacer,
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  HStack,
  Text,
  Link,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import ConnectWallet from "./connectWallet";
import { DarkModeSwitch } from "./darkmodeswitch";

export const Header = () => {
  return (
    <Box width="100vw" top={0} left={0} position="fixed" zIndex={2}>
      <HStack
        align={"center"}
        bg={useColorModeValue("whiteAlpha.800", "gray.800")}>
        <Flex
          width={"100%"}
          position={"relative"}
          justifyContent="center"
          align="center"
          flexGrow={0}
          boxSizing={"border-box"}>
          <VStack justify={"start"} align={"start"}>
            <Heading textAlign={"left"} fontSize="45">
              SHIBARINA
            </Heading>
            <HStack justify={"start"} gap={1}>
              <Link as={ReactRouterLink} to="/" _activeLink={{ color: "red" }}>
                <Text>About</Text>
              </Link>
              <Link
                as={ReactRouterLink}
                to="/swap"
                _activeLink={{ color: "red" }}>
                <Text>Swap</Text>
              </Link>
              <Link
                as={ReactRouterLink}
                to="/tokenomics"
                _activeLink={{ color: "red" }}>
                <Text>Tokenomics</Text>
              </Link>
            </HStack>
          </VStack>
          <Flex p={10}>
            <DarkModeSwitch />
            <ConnectWallet />
          </Flex>
        </Flex>
      </HStack>
    </Box>
  );
};
