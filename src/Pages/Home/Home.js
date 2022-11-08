import React from 'react';
import useTitle from '../hooks/useTitle';
import './Home.css'

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};

export default Home;