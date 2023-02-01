import { Image, Box, Flex, VStack } from "@chakra-ui/react";

export const Background = () => {
  return (
    <>
      <Box
        width={"100vw"}
        height={"100vh"}
        position={"fixed"}
        zIndex={-1}
        top={0}
        left={0}
      />
      <Flex
        width={"100%"}
        height={"100%"}
        pt={250}
        pb={122}
        justify={"center"}
        align={"center"}>
        <Image
          src={"/kashima2clear.png"}
          boxSize={"250px"}
          position={"absolute"}
          zIndex={0}
        />
      </Flex>
    </>
  );
};
