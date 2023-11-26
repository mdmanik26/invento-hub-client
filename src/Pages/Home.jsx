
import { Helmet } from 'react-helmet-async';
import Container from '../Components/Container'
import Banner from '../Components/HomePageComponents/Banner';
import Navbar from '../Shared/Navbar';

const Home = () => {
    return (
        <Container>
            <Helmet>
                <title>
                    InventoHub | Home
                </title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
        </Container>
    );
};

export default Home;