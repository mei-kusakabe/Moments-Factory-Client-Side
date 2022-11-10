import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../hooks/useTitle';
const AddService = () => {
    useTitle("Add Service")
    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value;

        const review = {
            title: title,
            price: price,
            img: img,
            description: description

        }

        fetch('https://moment-factory.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    form.reset();
                    toast('Service Added Successfully!');
                    //lert('Service Added Successfully!')
                }
            })
            .catch(error => console.error(error));

    }

    return (
        <div>

            <h2 className='fst-italic'>Please Add a Service..</h2>

            <form onSubmit={handleService} className="d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5  border shadow-lg rounded-3 bg-light  mx-5">

                <div className='row row-cols-1 row-cols-lg-2 gap-4'>
                    <input name="title" type="text" placeholder="Service Name" className="input border shadow mx-auto p-3 rounded" />
                    <input name="img" type="text" placeholder="Photo URL" className="input border shadow mx-auto p-3 rounded" />
                    <input name="price" type="text" placeholder="Price" className="input border shadow mx-auto p-3 rounded" />
                    <textarea name="description" className="input border shadow mx-auto p-3 rounded w-50" placeholder="Description" required></textarea>
                </div>
                <button className="button1 px-5  mx-3 fw-bold text-white my-3 border shadow">Add Service</button>

            </form>

        </div>
    );
};

export default AddService;


