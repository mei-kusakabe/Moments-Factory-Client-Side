import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
const AddReview = () => {

    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReviewAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const photoURL = form.photoURL.value;

        const review = {
            service_id: _id,
            serviceName: title,
            price,
            customerName: name,
            email,
            photoURL,
            message
        }

        fetch('http://localhost:5000/reviewsfactory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('moment-factory')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review  Added successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div className='my-5'>
            <h2 className='mb-3'>Add your Review about: <b className='fst-italic'> {title}</b> </h2>
            <form onSubmit={handleReviewAdd}>
                <div className='row row-cols-1 row-cols-lg-2 gap-4'>
                    <input name="_id" type="text" placeholder="Service ID" defaultValue={_id} className="input border shadow mx-auto p-3 rounded" />
                    <input name="name" type="text" placeholder="Your Name" className="input border shadow mx-auto p-3 rounded" />
                    <input name="photoURL" type="text" placeholder="Photo URL" defaultValue={user?.photoURL} className="input border shadow mx-auto p-3 rounded" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input border shadow mx-auto p-3 rounded" />
                    <textarea name="message" className="input border shadow mx-auto p-3 rounded w-50" placeholder="Your Review" required></textarea>
                </div>
                <button className="button1 px-5  mx-3 fw-bold text-white my-3 border shadow">Send Review</button>
            </form>
        </div>
    );
};

export default AddReview;