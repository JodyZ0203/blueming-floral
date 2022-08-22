import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  useToast
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useUser } from '../lib/hooks';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Plans(planId) {
  const user = useUser()
  const toast = useToast()

  async function clickHandle(id){
    if (id == 1){
      window.open('https://square.link/u/2K7HtV9o', '_blank')
    } else if (id == 2){
      window.open('https://square.link/u/ORVBZhHC', '_blank') 
    } else {
      window.open('https://square.link/u/9ubKJS1s', '_blank')
    }
  }

  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your needs
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Get one month free on us with any plan. Fresh bouquets at your doorstep of your choice monthly.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              3 Months
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                fresh flowers with new designs
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                one month free
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                cancel any time
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
            {user? 
                <Button w="full" colorScheme="purple" onClick={()=>clickHandle(1)}>
                  Get Started
                </Button>
                :   
              <Button w="full" colorScheme="purple" onClick={()=> router.push('/login') && toast({
                title: 'Not Logged In',
                description: "Create a new account or log into existing account to continue",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              })}>
                Get Started
              </Button> }
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('purple.300', 'purple.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                6 Months
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  59
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  fresh flowers with new designs
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  one month free
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  access to special gift items
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  free gift on special occasions
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  cancel any time
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                {user? 
                <Button w="full" colorScheme="purple" onClick={()=>clickHandle(2)}>
                  Get Started
                </Button>
                :   
              <Button w="full" colorScheme="purple" onClick={()=> router.push('/login') && toast({
                title: 'Not Logged In',
                description: "Create a new account or log into existing account to continue",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              })}>
                Get Started
              </Button> }
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Ongoing
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                49
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                fresh flowers with new designs
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                one month free
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                cancel any time
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
            {user? 
                <Button w="full" colorScheme="purple" onClick={()=>clickHandle(3)}>
                  Get Started
                </Button>
                :   
              <Button w="full" colorScheme="purple" onClick={()=> router.push('/login') && toast({
                title: 'Not Logged In',
                description: "Create a new account or log into existing account to continue",
                status: 'warning',
                duration: 9000,
                isClosable: true,
              })}>
                Get Started
              </Button> }
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}