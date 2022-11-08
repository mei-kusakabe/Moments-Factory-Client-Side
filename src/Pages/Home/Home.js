import React from 'react';
import useTitle from '../hooks/useTitle';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <h2>Home</h2>
            <Services></Services>

        </div>
    );
};

export default Home;