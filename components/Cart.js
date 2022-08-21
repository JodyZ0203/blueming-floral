import React from "react"
import { Button, Text, Stack, Drawer, DrawerOverlay, useToast, DrawerFooter, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Divider, Box  } from "@chakra-ui/react"
import { useShoppingCart } from "../lib/ShoppingCartContext"
import CartItem from "./CartItem"
import Flower from "./Flower"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useUser } from '../lib/hooks'
import router from "next/router"

export default function ShoppingCart({ isOpen }) {
    const user = useUser()
    const toast = useToast()
    const { closeCart, cartItems } = useShoppingCart()
    const btnRef = React.useRef()
    const format = (val) => `$` + (val / 100).toFixed(2)
    const clickHandle = () => {
        window.open('https://checkout.square.site/merchant/ML4BHR83T5XTW/checkout/H2ZCGH6GKMFINBZULGPYXWAO', '_blank')
      }
      
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={closeCart}
          size={'sm'}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart</DrawerHeader>
  
            <DrawerBody>
              <Divider/>
              <Stack>
              { cartItems.length !== 0 ? 
              (<>{cartItems.map(item => (<CartItem key={item.id} {...item}/>))}
              <Box margin={'auto'} fontWeight={'bold'} textAlign={'right'} fontSize={'lg'}>
                 Total{" "}
                    {format(
                    cartItems.reduce((total, cartItem) => {
                        const item = cartItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                    )}
              </Box></>) : (<Box><Text fontWeight={'bold'} letterSpacing={'.25px'} textAlign={'center'}>Nothing in here yet. Check out our Most Popular Bouquet!!!</Text>
              <Flower color={'#d4573e'} name={'Only Rose'} id={'jvdnn94'} price={'2499'} type={'Rose'} img={'https://i.ibb.co/XZ9ccfJ/rose-5.jpg'} /></Box>)
}
              </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={closeCart}>
                Cancel
              </Button>
              {user ?  <Button rightIcon={<AiOutlineShoppingCart/>} onClick={clickHandle} backgroundColor='#B9BFFF'>Checkout</Button>
             
             : <Button rightIcon={<AiOutlineShoppingCart/>} onClick={()=> router.push('/login') && toast({
          title: 'Not Logged In',
          description: "Create a new account or log into existing account to continue",
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })} backgroundColor='#B9BFFF'>Checkout</Button> }
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }