import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const services = useLoaderData();
    console.log(1);
    console.log(services);
    return (
        <div>
            <h2 className="mx-auto my-5"> Service Section</h2>
            <div className="card w-50 mx-auto my-5">
                <img src={services?.img} alt="service-Img" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{services?.title}</h5>
                    <p className="card-text">{services?.description}</p>
                    <p className="card-text"> <b>Service Charge: </b>{services?.price}</p>
                </div>
            </div>
        </div >

    );
};

export default ServiceDetails;


