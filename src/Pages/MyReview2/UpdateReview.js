import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
const UpdateReview = ({ params }) => {

    const update = useLoaderData();
    const [review, setReview] = useState(update);

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);

    }

    const handleUpdateReview = event => {
        event.preventDefault();
        console.log(review);
        fetch(`http://localhost:5000/orders/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review Updated!')
                    console.log(data);
                    event.target.reset();
                }

            })
    }
    return (
        <div>

            <form onSubmit={handleUpdateReview}>
                <div className=" container w-75  d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5  border shadow-lg rounded-3 bg-light register-box">
                    <h2>Update Review</h2>
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-light"></span>
                        <textarea className="form-control" onChange={handleInputChange} name="message" placeholder="Update review here" id="floatingTextarea" required></textarea>
                    </div>                </div>
                <button className="button1 px-5  mx-3 fw-bold text-white my-3 border shadow">Send Review</button>
            </form>

            {/* <Form onSubmit={handleUpdateReview} className=" container w-75  d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5  border shadow-lg rounded-3 bg-light register-box">

                <div className="text-center">
                    <h5 className="text-dark fs-6 mt-3">Fill the Review Form</h5>
                </div>
                <div className="p-4">
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-light"></span>
                        <input type="text" onChange={handleInputChange} className="form-control" defaultValue={update.customer} name="name" placeholder="Full Name" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text bg-light"></span>
                        <input type="email" onChange={handleInputChange} className="form-control" name="email" defaultValue={update.email} placeholder="Email" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-light"></span>
                        <textarea className="form-control" onChange={handleInputChange} name="message" defaultValue={update.message} placeholder="Update review here" id="floatingTextarea" required></textarea>
                    </div>



                    <Button variant="primary" className="btn-xl fw-bold" type="submit">Update</Button>

                    <hr />
                </div>
            </Form> */}

        </div>
    );
};

export default UpdateReview;