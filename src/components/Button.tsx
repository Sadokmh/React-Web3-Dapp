import { Box, Button, Text } from "@chakra-ui/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import IdentIcon from "./Identicon";


type Props = {
    handleOpenModal: any
};

const ConnectButton = ({handleOpenModal}: Props) => {

    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleConnectWallet = () => {
        activateBrowserWallet();
    }

    return account ? (
        <Box
            display="flex"
            alignItems="center"
            background="gray.700"
            borderRadius="xl"
            py="0"
        >
            <Box px="3">
            <Text color="white" fontSize="md">
                {etherBalance && parseFloat(formatEther(etherBalance))} ETH
            </Text>
            </Box>
            <Button
                onClick={handleOpenModal}
                bg="gray.800"
                border="1px solid transparent"
                _hover={{
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "blue.400",
                    backgroundColor: "gray.700"
                }}
                borderRadius="xl"
                m="1px"
                px={3}
                height="38px"
            >
                <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                    {
                        account && `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`
                }
                </Text>
                <IdentIcon/>
                </Button>
        </Box>
    ) 
        : (
            <Button onClick={handleConnectWallet}>Connect to a Wallet </Button>
        )
}


export default ConnectButton;