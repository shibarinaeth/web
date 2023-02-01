import { Box, Flex, Text, Heading, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex justify={"center"} align="flex-start" height={"100vh"}>
      <VStack width={"40%"} height={"100%"} gap={20}>
        <Text>
          Welcome Shibarina, Crypto's cutest dog coin! Designed to raise
          awareness around the Shibarium ecosystem, our little pup is ready to
          take world by storm with its adorable potential.
        </Text>

        <Flex flexDir={"column"}>
          <Heading>Roadmap:</Heading>
          <Text>1. Community outreach and Influencer Gathering</Text>
          <Text>
            2. Donate taxes to Kashima Prefecture Dog Rescue Community
          </Text>
          <Text>3. Send 50% supply to Vitalik.eth</Text>
          <Text>
            4. Launch BabyKashima, the first step towards creating a
            self-sustaining model.
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default About;
