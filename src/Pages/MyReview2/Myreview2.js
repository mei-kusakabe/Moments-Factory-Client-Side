import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import MyReviewRow from './MyReviewRow';
import useTitle from '../hooks/useTitle';

const Myreview2 = () => {
    useTitle('My Reviews')

    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://moment-factory.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('moment-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
            })
    }, [user?.email, logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if (proceed) {
            fetch(`https://moment-factory.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('moment-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }


    // const handleUpdate = id => {
    //     fetch(`https://moment-factory.vercel.app/orders/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('moment-token')}`
    //         },
    //         body: JSON.stringify({ status: 'Approved', message: { message } })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 const remaining = orders.filter(odr => odr._id !== id);
    //                 const approving = orders.find(odr => odr._id === id);
    //                 approving.status = 'Approved'

    //                 const newOrders = [approving, ...remaining];
    //                 setOrders(newOrders);
    //             }
    //         })
    // }


    // const handleUpdate = event => {
    //     event.preventDefault();
    //     // console.log(user);
    //     fetch(`https://moment-factory.vercel.app/orders/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('moment-token')}`
    //         },
    //         body: JSON.stringify(orders)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 alert('Review updated')
    //                 console.log(data);
    //             }

    //         })
    // }

    // const handleUpdateChange = event => {
    //     const field = event.target.name;
    //     const value = event.target.value;
    //     const newOrder = { ...orders }
    //     newOrder[field] = value;
    //     setOrders(newOrder);
    // }

    const len = orders.length;

    return (
        <div className='my-5'>
            {/* <h2 className="text-5xl">You have {orders.length} Orders</h2> */}

            {len
                ? <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Name</th>
                                <th>Service Name</th>
                                <th>Review</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <MyReviewRow
                                    key={order._id}
                                    order={order}
                                    handleDelete={handleDelete}
                                // handleStatusUpdate={handleUpdate}
                                // handleUpdateChange={handleUpdateChange}
                                ></MyReviewRow>)
                            }
                        </tbody>
                    </table>
                </div>
                : <h2 className="fw-bold text-muted my-5">No reviews were added</h2>
            }


        </div>
    );
};

export default Myreview2;