import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

const Tokenomics = () => (
  <Flex justify={"center"} align="center" height={"100vh"} gap={20}>
    <Box width={"50%"} height={"100%"} mt={"30%"}>
      <StatGroup>
        <Stat>
          <StatLabel>Buy</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Sell</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
    <Box width={"50%"} height={"100%"} mt={"30%"}>
      <StatGroup>
        <Stat>
          <StatLabel>Buy</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Sell</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
    <Box width={"50%"} height={"100%"} mt={"30%"}>
      <StatGroup>
        <Stat>
          <StatLabel>Buy</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Sell</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  </Flex>
);

export default Tokenomics;
