

import Bennydex
 from './componetes/BennyDex/BennyDex';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
        <Box maxW="550px" mx="auto"  p={6} h="500px">
        <Bennydex/>
        </Box>
      
    </ChakraProvider>
  );
}

export default App;
