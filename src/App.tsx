import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import Layout from './components/layout';
import ConnectButton from './components/Button';
import AccountModal from './components/AccountModal';

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen}/>
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
   </ChakraProvider>
  );
}

export default App;
