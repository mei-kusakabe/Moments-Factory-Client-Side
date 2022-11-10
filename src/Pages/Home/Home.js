import React from 'react';
import Blog from '../Blog/Blog';
import useTitle from '../hooks/useTitle';
import { Link } from 'react-router-dom';
import './Home.css'
import Gallery from '../Gallery/Gallery';
import HomeServices from '../Services/HomeServices';
import Contact from '../Contact/Contact';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <section className='header-section py-5 bg-image'>
                <div>
                    <div className="w-50 w-lg-50 w-md-100 w-sm-100 w-xs-100 ms-auto px-5 mx-5">
                        <div>
                            <h1 className="mb-5  name text-white fst-italic fw-bold">Moments Factory</h1>
                            <h4 className="mb-3 text-header fst-italic text-center text-white">"The way that light hits objects, I think, is one of the more important <br></br> things that sculpture and photography share."
                                ~ Rashid Johnson</h4>
                            <a href="/services"> <button type="button" class=" home-btn btn btn-outline-light fw-bold" >Go to Services</button></a>
                        </div>
                    </div>
                </div>
            </section >
            <div className='text-center home-service'>
                <HomeServices></HomeServices>
                <button className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow"><Link to={'/services'}>See All</Link></button>
            </div>
            <div>
                <Gallery></Gallery>
            </div>

            <div>
                <Contact></Contact>
            </div>
            <div className='text-center'>
                <Blog></Blog>
            </div>
        </div >
    );
};

export default Home;