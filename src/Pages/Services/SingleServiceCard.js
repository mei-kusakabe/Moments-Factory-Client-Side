import React from 'react';
import './SingleServiceCard.css'
import { Link } from 'react-router-dom';

const SingleServiceCard = ({ service }) => {
    // const { title, img, price } = service;
    console.log(service?.title);
    return (

        <div className='topic m-5 text-center border-1 p-0 w-75'>
            <img src={service?.img} alt="" />
            <h5 className='p-3 w-100'>Title: {service?.title} </h5>
            <p className='p-3 text-truncate'>  {service?.description}</p>
            <h4> Price: {service?.price}</h4>
            <button type="button" className="btn btn-info px-5  mx-3 fw-bold text-white my-2"><Link to={`/services/${service?._id}`}>View Details</Link></button>
        </div>

    );
};

export default SingleServiceCard;