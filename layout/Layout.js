import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Layout = ({children}) => {
    return (
        <>
        <Header/>
        <Box minHeight={'100%'} position={'relative'}>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
        </Box>
         </>
    )
}

export default Layout;