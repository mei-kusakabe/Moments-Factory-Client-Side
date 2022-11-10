import React, { useContext, useEffect, useState } from 'react';
import SingleServiceCard from './SingleServiceCard';
import './SingleServiceCard.css'
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../Contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const Services = () => {
    useTitle('Services')
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://moment-factory.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    if (loading) {
        return <Spinner animation='border' variant='primary' />
    }


    return (
        <div className='services'>

            <div className='p-2 list rounded  justify-content-center align-items-center service-page-list'>
                {
                    services.map((service, i) => <p key={service._id}>
                        <button className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow"> <Link to={`/services/${service._id}`}> <span className='fw-bold'>{i + 1}.</span>{service.title}</Link></button>
                        {/* <Link to={`/services/${service._id}`}> <span className='fw-bold'>{i + 1}.</span>{service.title}</Link> */}
                    </p>)
                }

            </div>
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