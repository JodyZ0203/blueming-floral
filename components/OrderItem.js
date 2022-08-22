import { HStack, Image, Box, IconButton, Text } from "@chakra-ui/react"

export default function CartItem({id, quantity, img, price, name}) {
    const format = (val) => `$` + (val / 100).toFixed(2)
    return (
        <HStack gap={'2'} marginTop={'4%'} padding={'2%'} justifyContent={'space-between'} key={id}>
            <Image src={img} width={'125px'} height={'75px'} objectFit={'cover'}/>
            <Box key={id}>
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
        </HStack>
    )

}