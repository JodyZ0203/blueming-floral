
import Layout from "../../layout/Layout";
import {useRouter} from "next/router";
import useSWR from "swr";
import {
    SkeletonText,
  } from '@chakra-ui/react';
import Product from "../../components/Product";

async function fetcherFunction(...args) {
    const res = await fetch(...args)
    return res.json()
  }

export default function Flowers() {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useSWR(`/api/flowers/${id}`, fetcherFunction)

    if (error) return <div>failed to load</div>
    if (!data) return <Layout><SkeletonText padding={'5%'} mt='8' noOfLines={10} spacing='10' isLoaded={data}/></Layout>
    return (
        <>
        <Layout>
            {data?.flowers && data?.flowers.map((flower) => (
              <Product key={flower.productId} name={flower.name} img={flower.img} id={flower.productId} price={flower.price} description={flower.description}/>
        ))}
        </Layout>
        </>
    )
}

