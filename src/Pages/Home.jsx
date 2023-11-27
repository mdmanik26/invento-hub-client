
import { Helmet } from 'react-helmet-async';
import Container from '../Components/Container'
import Banner from '../Components/HomePageComponents/Banner';
import Navbar from '../Shared/Navbar';
import AboutUs from '../Components/HomePageComponents/AboutUs';
import Software from '../Components/HomePageComponents/Software';
import Footer from '../Components/Footer';
import Time from '../Components/HomePageComponents/Time';

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
            <AboutUs></AboutUs>
            <Software></Software>
            <Time></Time>
            <Footer></Footer>

        </Container>
    );
};

export default Home;