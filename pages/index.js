import Carousel from "../components/Carousel";
import Features from "../components/Features";
import Plans from "../components/Plans";
import Layout from "../layout/Layout";

const Home = () => {
    return (
        <>
        <Layout>
         <Carousel/>
        <Features/>
        <Plans/>
        </Layout>
        </>
    )
}

export default Home;