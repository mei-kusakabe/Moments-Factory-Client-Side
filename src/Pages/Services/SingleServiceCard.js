import React from 'react';
import './SingleServiceCard.css'
import { Link } from 'react-router-dom';
import './SingleServiceCard.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const SingleServiceCard = ({ service }) => {
    // const { title, img, price } = service;
    console.log(service?.title);
    return (

        <div className='service m-5 text-center border-1 p-0 w-75 shadow'>

            <PhotoProvider>
                <PhotoView src={service?.img}  >
                    <img src={service?.img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <h5 className='p-3 w-100'>Title: {service?.title} </h5>
            <p className='p-3 text '>  {service?.description}</p>
            <h4> Price: {service?.price}</h4>

            <button className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow"><Link to={`/services/${service?._id}`}>View Details</Link></button>
        </div>

    );
};

// text-truncate

export default SingleServiceCard;