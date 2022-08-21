import Carousel from "../components/Carousel";
import Features from "../components/Features";
import Plans from "../components/Plans";
import Layout from "../layout/Layout";
import { useUser } from "../lib/hooks";

const Home = () => {
    const user = useUser();
    return (
        <>
        <Layout>
         <Carousel/>
        <Features/>
        <Plans/>
        {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
        </Layout>
        </>
    )
}

export default Home;