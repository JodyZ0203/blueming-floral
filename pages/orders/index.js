import Layout from "../../layout/Layout";
import Order from "../../components/Order";
import Flower from "../../components/Flower";
import { Text, Box, SkeletonText, VStack, StackDivider } from "@chakra-ui/react";

import { useUser } from '../../lib/hooks'

export default function Orders(){
    const user = useUser()
    return (
        <>
        <Layout>
            <Box height='100vh' margin='auto' overflow={'auto'}>
            <Text marginTop={'2%'} fontWeight={'bold'} letterSpacing={2} fontSize={'xl'} textAlign={'center'}>My Orders</Text>
            {user ? 
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                >

    <Box><Order email={user.email}/></Box>

                
            </VStack> : <Box marginTop={'4%'}><img style={{margin:'auto', maxHeight:'600px'}} src='NoData.svg' alt='no data'/>
      <Text textAlign={'center'} fontSize="20px" mt={3} mb={2}>
        No Orders Yet. Sign Up first or Log In to continue!
      </Text></Box>}
            </Box>
        </Layout>
        </>
    )
}

