import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode
}


const Layout = ({children}: Props) => {

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="100vh"
            bg="gray.800"
        >
            {
                children
            }
        </Flex>
    )
}

export default Layout;