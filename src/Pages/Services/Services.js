import React, { useEffect, useState } from 'react';
import SingleServiceCard from './SingleServiceCard';
import './SingleServiceCard.css'
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='services'>
            <div >
                <h2 className='fw-bold text-white pt-4'>All Services</h2>

                <div className='service-all m-5 border-0'>
                    {
                        services.map(service => <SingleServiceCard
                            key={service._id}
                            service={service}>
                        </SingleServiceCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;