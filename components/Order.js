import useSWR from "swr"
import {
    Text,  Box, Divider, Tag, Link
  } from '@chakra-ui/react';
import {ORDER_STATES} from '../constants/constants'

async function fetcherFunction(...args) {
    const res = await fetch(...args)
    return res.json()
  }

export default function Order(email){
    const {data, error} = useSWR(`/api/orders/${encodeURIComponent(email.email)}`, fetcherFunction)
    const format = (val) => `$` + (val / 100).toFixed(2)
    if (error) return <div>failed to load</div>

    return (
        <>
        {data && (Object.keys(data).length === 0) ? 
        <Box marginTop={'4%'}><img style={{margin:'auto', maxHeight:'600px'}} src='Void.svg' alt='no data'/>
        <Text textAlign={'center'} fontSize="20px" mt={3} mb={2}>
          No Orders Yet.
        </Text></Box>
        : data?.orders.map(order=>(<Box key={order.id} padding={'2%'}>
            <Tag colorScheme={ORDER_STATES[order.state]}>{order.state}</Tag>
            <Text>{new Date(order.createdAt).toLocaleDateString('en-us', {year: "numeric", month:"long", day:"numeric"})}</Text><Text>Order Id: {order.id}</Text>
        <Text>CAD {format(order.totalMoney.amount)}</Text>
        <Link textDecoration={'underline'} href={`orders/${encodeURIComponent(order.id)}`}>View Details</Link>
        <Divider marginTop={'0.5%'} borderTop={"1px solid grey"}/></Box>))}
        </>
    )
}