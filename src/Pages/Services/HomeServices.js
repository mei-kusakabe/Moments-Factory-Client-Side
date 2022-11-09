import React, { useEffect, useState } from 'react';
import SingleServiceCard from './SingleServiceCard';
import './SingleServiceCard.css'
import { Link } from 'react-router-dom';
const HomeServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='services'>
            <div >
                <h2 className='fw-bold text-white pt-4'>All Services</h2>

                <div className='p-2 list rounded  justify-content-center align-items-center  '>
                    {
                        services.map((service, i) => <p key={service._id}>
                            <button className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow"> <Link to={`/services/${service._id}`}> <span className='fw-bold'>{i + 1}.</span>{service.title}</Link></button>
                            {/* <Link to={`/services/${service._id}`}> <span className='fw-bold'>{i + 1}.</span>{service.title}</Link> */}
                        </p>)
                    }

                </div>

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

export default HomeServices;