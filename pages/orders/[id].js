
import Layout from "../../layout/Layout";
import {useRouter} from "next/router";
import useSWR from "swr";
import {
    SkeletonText, Text, Stack, Tag, Divider
  } from '@chakra-ui/react';
import OrderDetails from "../../components/OrderDetails"
import {ORDER_STATES} from '../../constants/constants'

async function fetcherFunction(...args) {
    const res = await fetch(...args)
    return res.json()
  }

export default function Details() {
    const router = useRouter()
    const format = (val) => `$` + (val / 100).toFixed(2)
    const { id } = router.query
    const { data, error } = useSWR(`/api/orders/${id}`, fetcherFunction)
    if (error) return <div>failed to load</div>
    if (!data) return <SkeletonText padding={'3%'} mt='10' noOfLines={10} spacing='10' isLoaded={data}/>
    return (
        <>
        <Layout>
        <Stack paddingX={'10%'} maxW={'1000px'} justifyContent={'center'} margin={'auto'} paddingY={'2%'}>
           <Text fontWeight={'bold'} fontSize={'xl'}>Order Details</Text>
           <Text>Order Id: {data?.order.id}</Text>
           <Text color={ORDER_STATES[data?.order.state]}>Order Status: {data?.order.state}</Text>
            <Text>Date: {new Date(data?.order.createdAt).toLocaleDateString('en-us', {year: "numeric", month:"long", day:"numeric"})}</Text>
        <Text>Totals: CAD {format(data?.order.totalMoney.amount)}</Text>
        <Divider/>
            {data?.order && data?.order.lineItems.map((order)=><OrderDetails key={order.uid} id={order.uid} quantity={order.quantity}/>)}
        </Stack>
        </Layout>
        </>
    )
}