
import useSWR from "swr";
import OrderItem from "./OrderItem"
import {
    Box
  } from '@chakra-ui/react';
async function fetcherFunction(...args) {
    const res = await fetch(...args)
    return res.json()
  }

export default function OrderDetails(id) {
    const { data, error } = useSWR(`/api/flowers/${id.id}`, fetcherFunction)
    if (error) return <div>failed to load</div>
    //if (!data) return <SkeletonText padding={'5%'} mt='8' noOfLines={10} spacing='10' isLoaded={data}/>
    return (
        <Box key={id.id}>
            {data?.flowers && data?.flowers.map((flower) => (
              <OrderItem key={id.id} name={flower.name} img={flower.img} id={flower.productId} price={flower.price} quantity={id.quantity}/>
        ))}
        </Box>
    )
}