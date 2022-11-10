import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleReview from '../SingleReview/SingleReview';
import './../SingleReview/SingleReview.css'
import useTitle from '../hooks/useTitle';

const ServiceDetails = () => {
    useTitle("Service Details")

    const services = useLoaderData();
    // const [reviews, setReviews] = useState([])
    //console.log(1);
    // console.log(services);
    // http://localhost:5000/reviews?service_id=636aa61b63b0fbeabeff4c23

    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviewsfactory/${services?._id}`)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    //         .then(data => console.log(data))
    // }, [])

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

            <div>
                <SingleReview></SingleReview>
            </div>

            <div>
                <h2 className="text-4xl">Want to add review about {services?.title}? </h2>
                <button className="button1 px-5  mx-3 fw-bold text-white my-2 border shadow"> <Link to={`/reviewPage/${services?._id}`}> <span className='fw-bold'>Add Review</span></Link></button>
            </div>
        </div >

    );
};

export default ServiceDetails;


