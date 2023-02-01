import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Metamask from "../assets/metamask";
import { IconButton } from "@chakra-ui/react";

const ConnectWallet = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div>
        Connected to {address}
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </div>
    );
  return <Button onClick={() => connect()}>Connect Wallet</Button>;
};

const Button = () => (
  <IconButton
    height={"40px"}
    width={"40px"}
    isRound
    colorScheme="black"
    p={1}
    m={4}
    variant="outline"
    icon={<Metamask width={"18px"} />}>
    Connect Wallet
  </IconButton>
);

export default ConnectWallet;
