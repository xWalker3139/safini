import React from 'react';

import Navigation from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <About />
            <Product />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;