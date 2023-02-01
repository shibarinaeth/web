import { Center } from "@chakra-ui/react";
import { SwapWidget } from "@uniswap/widgets";
const theme = {
  primary: "#C3D3D0",
  secondary: "#000",
  container: "#fff",
  module: "#de9c9a",
  accent: "#962213",
  outline: "#000",
  dialog: "#111F21",
  networkDefaultShadow: "#fff",
  accentSoft: "#9ec5ea",
};
const Swap = () => {
  return (
    <Center position={"relative"} top={-120}>
      <SwapWidget theme={theme} />
    </Center>
  );
};

export default Swap;
