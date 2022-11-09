import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './SingleReview.css'
const SingleReview = () => {

    const services = useLoaderData();
    const [reviews, setReviews] = useState([])


    //console.log(1);
    // console.log(services);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewsfactory?service_id=${services?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
        //.then(data => console.log(data))
    }, [services?._id])


    // const reviews = useLoaderData();
    // console.log(2);
    // console.log(reviews);
    return (
        <div className='m-5 border shadow'>
            <h2 className='my-2 py-3'>Reviews of  <b>{services?.title}</b></h2>
            <table class="table">
                <tr>
                    <th>User</th>
                    <th>Service Name</th>
                    <th>Review</th>
                </tr>

            </table>
            {
                reviews.map((review, i) => <div className='d-flex  justify-content-start align-items-center mx-5 '
                    key={review._id}>

                    <h2 className='pe-2'>{i + 1}</h2>
                    <h2 >
                        <Image
                            style={{ height: '50px' }} data-toggle="tooltip"
                            roundedCircle title={review?.customerName}
                            src={review?.photoURL}>
                        </Image>
                        {review?.customerName}</h2>
                    <h2 className='px-5 mx-auto'>{review?.serviceName}</h2>
                    <h2 className='px-5 mx-auto'>{review?.message}</h2>
                    <hr className="mt-5 mb-5" />

                    {/* <hr className='fw-bold fs-5' /> */}

                </div>)
            }


        </div >
    );
};

export default SingleReview;


