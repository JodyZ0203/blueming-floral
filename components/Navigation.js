import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  chakra,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NAV_ITEMS } from '../constants/constants';
import { useRouter } from 'next/router'
import { useUser } from '../lib/hooks';
import { useShoppingCart } from '../lib/ShoppingCartContext';
import { useState, useEffect } from 'react';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    fontSize={'lg'}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.href}>
    {children.label}
  </Link>
);

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()
  const user = useUser()
  const [quantity, setQuantity] = useState(0)
  const { cartQuantity, openCart } = useShoppingCart()
  useEffect(() => setQuantity(cartQuantity), [cartQuantity])

  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} position={'sticky'}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link href={'./'}><Image
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            src="./Flower.png"
            alt="Logo"
            boxSize="60px"
            />
          </Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {NAV_ITEMS.map((label, href) => (
                <NavLink key={href}>{label}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Stack alignItems={'center'} direction={'row'} spacing={6} justify={'flex-end'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                    <Avatar bg={'#B9BFFF'} size={'sm'}/>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={()=> router.push('/orders')}>My Orders</MenuItem>
                {user ?  <><MenuDivider /><MenuItem onClick={() => router.push('/api/logout')}>Sign Out</MenuItem></> :  <MenuItem onClick={()=> router.push('/login')}>Sign In</MenuItem>}
              </MenuList>
            </Menu>
            <IconButton
                boxShadow={'sm'}
                aria-label="label"
                isRound
                size="md"
                onClick={openCart}
                icon={
              <>
        <AiOutlineShoppingCart />
        <chakra.span
          pos="absolute"
          top="-1px"
          right="-1px"
          px={2}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          lineHeight="none"
          color="white.100"
          transform="translate(50%,-50%)"
          bg="#B9BFFF"
          rounded="full"
        >
          {quantity}
        </chakra.span>
      </>
    }
      />
          </Stack>      
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NAV_ITEMS.map((label, href) => (
                <NavLink key={href}>{label}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}