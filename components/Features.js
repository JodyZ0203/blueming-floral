import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    Icon,
    Link,
    Stack,
    Text,
    GridItem,
    Container,
    SimpleGrid,
  } from '@chakra-ui/react';
import { FEATURE_ITEMS } from '../constants/constants';
import { useRouter } from 'next/router'

const Feature = ({ title, text, icon }) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };
  
  
export default function Features() {
  const router = useRouter()

  return (
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Blossoms 💐 for any occasion
              </chakra.h2>
              <Button onClick={()=> router.push('/flowers')} boxShadow={'20px 2opx 20px 20px black'} colorScheme="green" size="md">
                Shop now
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                Sending flowers to your loved ones was never this easy before. Add to cart and leave the rest to us! Fresh flowers for all seasons, there are also seasonal items and gifts to make your gift the most special. We also support customization and subscription plans to suit your needs. 
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {
              FEATURE_ITEMS.map(({label, icon, description}) => (
                <Feature key={label}
                icon={<Icon as={icon} w={10} h={10} />}
                title={label}
                text={description}
              />    
              ))}
      </SimpleGrid>
    </Box>
      </Box>
    );
  }