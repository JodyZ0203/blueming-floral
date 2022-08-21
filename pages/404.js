import { Box, Heading, Text, Button } from '@chakra-ui/react';
import router from 'next/router';

export default function NotFound() {
  return (
    <Box textAlign="center" margin={'auto'} py={10} px={6}>
      <img style={{margin:'auto', maxHeight:'1200px'}} src='pageNotFound.svg' alt='404'></img>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        Ooooops... The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="purple"
        bgColor="#B9BFFF"
        color="white"
        variant="solid"
        onClick={()=> router.push('/')}>
        Go to Home
      </Button>
    </Box>
  );
}