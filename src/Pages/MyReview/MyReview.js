import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import useTitle from '../hooks/useTitle';
const MyReview = ({ params }) => {
    useTitle('My Review')

    const myreviews = useLoaderData();
    console.log(myreviews);
    const [reviews, setReviews] = useState([])
    //const [myreviews, setmyReviews] = useState([])


    useEffect(() => {
        fetch(`https://moment-factory.vercel.app/myreviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .then(data => console.log(data))
    }, [])

    // console.log(reviews);


    // //console.log(1);
    // // console.log(services);

    // useEffect(() => {
    //     fetch(`https://moment-factory.vercel.app/myreviews?email=${reviews?.email}`)
    //         .then(res => res.json())
    //         .then(data => setmyReviews(data))
    //         .then(data => console.log(data))
    // }, [reviews?.email])


    // const reviews = useLoaderData();
    // console.log(2);
    // console.log(reviews);

    const handleDelete = email => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`https://moment-factory.vercel.app/myreviews/${email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myreviews.filter(odr => odr.email !== email);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = email => {
        fetch(`https://moment-factory.vercel.app/reviewsfactory?email=${myreviews.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr.email !== email);
                    const approving = reviews.find(odr => odr.email === email);
                    approving.status = 'Approved'

                    const newReview = [approving, ...remaining];
                    setReviews(newReview);
                }
            })

    }


    return (
        <div className='m-5 border shadow'>
            {/* <h2 className='my-2 py-3'>Reviews of  <b>{reviews?.title}</b></h2> */}
            <table>
                <tr>
                    <th>User</th>
                    <th>Service Name</th>
                    <th>Review</th>
                </tr>

            </table>
            {
                myreviews.map((review, i) => <div className='d-flex  justify-content-start align-items-center mx-5 '
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

                    <button onClick={() => handleStatusUpdate(review?.email)} className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow">  <span className='fw-bold'>Edit Review</span></button>
                    <button onClick={() => handleDelete(review?.email)} className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow">  <span className='fw-bold'>Delete Review</span></button>

                </div >)}
        </div>
    );
};

export default MyReview;