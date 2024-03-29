import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import IdentIcon from "./Identicon";


type Props = {
    isOpen: any,
    onClose: any
}

const AccountModal = ({isOpen, onClose}: Props) => {
    const { account, deactivate } = useEthers();
    
    const handleDeactivateAccount = () => {
        deactivate();
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="md" >
    <ModalOverlay />
    <ModalContent
      background="gray.900"
      border="1px"
      borderStyle="solid"
      borderColor="gray.700"
      borderRadius="3xl"
    >
      <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium">
        Account
      </ModalHeader>
      <ModalCloseButton
        color="white"
        fontSize="sm"
        _hover={{
          color: "whiteAlpha.700",
        }}
      />
      <ModalBody pt={0} px={4}>
        <Box
          borderRadius="3xl"
          border="1px"
          borderStyle="solid"
          borderColor="gray.600"
          px={5}
          pt={4}
          pb={2}
          mb={3}
        >
          <Flex justifyContent="space-between" alignItems="center" mb={3}>
            <Text color="gray.400" fontSize="sm">
              Connected with MetaMask
            </Text>
                            <Button
                                onClick={handleDeactivateAccount}
              variant="outline"
              size="sm"
              borderColor="blue.800"
              borderRadius="3xl"
              color="blue.500"
              fontSize="13px"
              fontWeight="normal"
              px={3}
              height="26px"
              _hover={{
                background: "none",
                borderColor: "blue.300",
                textDecoration: "underline",
              }}
            >
              Change
            </Button>
          </Flex>

          <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
            <IdentIcon />
            <Text
              color="white"
              fontSize="xl"
              fontWeight="semibold"
              ml="2"
              lineHeight="1.1"
            >
              {account &&
                `${account.slice(0, 6)}...${account.slice(
                  account.length - 4,
                  account.length
                )}`}
            </Text>
          </Flex>
          <Flex alignContent="center" m={3}>
            <Button
              variant="link"
              color="gray.400"
              fontWeight="normal"
              fontSize="sm"
              _hover={{
                textDecoration: "none",
                color: "whiteAlpha.300",
              }}
            >
              <CopyIcon mr={1} />
              Copy Address
            </Button>
            <Link
              fontSize="sm"
              display="flex"
              alignItems="center"
              href={"#"}
              isExternal
              color="gray.400"
              ml={6}
              _hover={{
                color: "whiteAlpha.800",
                textDecoration: "underline",
              }}
            >
              <ExternalLinkIcon mr={1} />
              View on Explorer
            </Link>
          </Flex>
        </Box>
      </ModalBody>
      <ModalFooter
        justifyContent="end"
        background="gray.700"
        borderBottomLeftRadius="3xl"
        borderBottomRightRadius="3xl"
        p={6}
      >
        <Text color="white" textAlign="left" fontWeight="medium" fontSize="md">
          Yout transactions will apprear here...
        </Text>
      </ModalFooter>
    </ModalContent>
  </Modal>

    );
};

export default AccountModal;
