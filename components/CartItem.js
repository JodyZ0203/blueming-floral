import { useShoppingCart } from "../lib/ShoppingCartContext"
import { HStack, Image, Box, IconButton, Text } from "@chakra-ui/react"
import { FaTimes } from "react-icons/fa"
import { useEffect } from "react"

export default function CartItem({id, quantity, img, price, name}) {
    const format = (val) => `$` + (val / 100).toFixed(2)
    const {
        removeFromCart
      } = useShoppingCart()
      useEffect(()=>{
        const listener = (e) => {
          if (e._reactName == "onClick") {
            removeFromCart(id)
          }
      };
      }, [])
    return (
        <HStack gap={'2'} marginTop={'4%'} padding={'2%'} justifyContent={'space-between'}>
            <Image src={img} width={'125px'} height={'75px'} objectFit={'cover'}/>
            <Box>
                <Box>
                    {name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>x{quantity}</span>)
                    }
                </Box>
                <Box>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                {format(price)}
                </div>
                </Box>
            </Box>
            <Text>{format(price * quantity)}</Text>
            <IconButton size={'sm'} marginRight={'auto'} icon={<FaTimes color={'grey'} onClick={()=>removeFromCart(id)}/>} variant='outline'/>

          
        </HStack>
    )

}