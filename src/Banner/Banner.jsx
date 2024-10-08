import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center h-[500px] mx-4 md:mx-8  lg:mx-16" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> 

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TopItem</h1>
                <p className="text-lg md:text-xl mb-6">Explore the best products at unbeatable prices!</p>
                <a href="#shop-now" className="btn bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-300">
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default Banner;
