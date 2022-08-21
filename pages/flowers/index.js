import Layout from "../../layout/Layout";
import Flower from "../../components/Flower";
import { SimpleGrid, Box, SkeletonText, Link } from "@chakra-ui/react";
import router from "next/router";
import useSWR from "swr";

async function fetcherFunction(...args) {
    const res = await fetch(...args)
    return res.json()
  }

const Flowers = () => {
    const {data, error} = useSWR('/api/flowers', fetcherFunction)
    
    if (error) return <div>failed to load</div>
    
    return (
        <>
        <Layout>
            <Box height='100vh' margin='auto' overflow={'auto'} width={'75%'}>
            <SimpleGrid minChildWidth='350px' spacingX='80px' spacingY='390px' position='relative'>
                {data && data?.flowers.map((flo, index) => (

    <Box onClick={()=> router.push(`/flowers/${flo.productId}`)} key={flo.productId} cursor={'pointer'} height='90px'><SkeletonText isLoaded={data} mt='4' noOfLines={4} spacing='4' /><Flower  id={flo.productId} name={flo.name} color={flo.color} img={flo.img} type={flo.type} price={flo.price}/></Box>

                ))}
            </SimpleGrid>
            </Box>
            <Box height='10px' opacity='0.0'></Box>
        </Layout>
        </>
    )
}

export default Flowers;