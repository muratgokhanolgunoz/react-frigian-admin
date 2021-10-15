import React from 'react';
import Navbar from './constant/Navbar';
import Area from './area/Area';
import Footer from './constant/Footer';

const Main = () => {
    return (
        <div id="main">
            <Navbar />
            <Area /> 
            <Footer />           
        </div>
    );
}
export default Main;