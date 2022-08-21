import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Input,
    Flex,
    VStack,
    HStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    useNumberInput
  } from '@chakra-ui/react';
  import { MdLocalShipping } from 'react-icons/md';
  import { useShoppingCart } from '../lib/ShoppingCartContext';
  import { useEffect, useState } from 'react';
  
  export default function Product({img, name, description, price, id}) {
    const format = (val) => `$` + (val / 100).toFixed(2)
    const {
      batchIncreaseCartQuantity
    } = useShoppingCart()
    useEffect(()=>{
      const listener = (e) => {
        if (e._reactName == "onClick") {
          batchIncreaseCartQuantity(id, Number(input.value), img, price, name)
        }
    };
    }, [])
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 15,
      precision: 0,
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={img}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {format(price)}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {description}
                </Text>
                <Text fontSize={'lg'}>
                  {}
                </Text>
              </VStack>
              <HStack maxW='320px'>
              <Button {...dec}>-</Button>
              <Input {...input} />
              <Button {...inc}>+</Button>
              </HStack>

            </Stack>
  
            <Button
              rounded={'lg'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              fontWeight={'bold'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              onClick={() => batchIncreaseCartQuantity(id, Number(input.value), img, price, name)}
              _hover={{
                transform: 'translate3d(1.5px, 1px, 1px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }