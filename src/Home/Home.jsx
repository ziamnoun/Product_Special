import React from 'react';
import Banner from '../Banner/Banner';
import ProductsPage from '../ProductsPage/ProductsPage';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <ProductsPage></ProductsPage>

            <Footer></Footer>
        </div>
    );
};

export default Home;