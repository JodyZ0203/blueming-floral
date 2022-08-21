import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Skeleton
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  import { useShoppingCart } from '../lib/ShoppingCartContext';
  
  export default function Flower({img, name, color, type, price, id}) {
    const [loaded, setLoaded] = useState(false)
    const format = (val) => `$` + (val / 100).toFixed(2)
    const {
      increaseCartQuantity,
    } = useShoppingCart()

    useEffect(()=>{
      const listener = (e) => {
        if (e._reactName == "onClick") {
          increaseCartQuantity(id, img, price, name)
        }
    };
    }, [])

    function handleAddToCart(e) {
      e.stopPropagation()
      increaseCartQuantity(id, img, price, name)
    }

    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: {img},
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
             <Skeleton isLoaded={loaded}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={img}
              alt={name}
              onLoad={()=>setLoaded(true)}
            />
            </Skeleton>
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={color} fontSize={'sm'} textTransform={'uppercase'} fontWeight={'lg'}>
              {type}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {format(price)}
              </Text>
              {type == "Sunflower" ? <Text textDecoration={'line-through'} color={'gray.600'}>
                {format('5999')}
              </Text>: <Text textDecoration={'line-through'} color={'gray.600'}>
              </Text> }
              <Button          
                    fontSize="xs"
                    color="gray.900"
                    fontWeight="bold"
                    rounded="lg"
                    textTransform="uppercase" bg='white' px={2}
                    py={1}
                    onClick={e => handleAddToCart(e)}
                    >Add to cart</Button>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }