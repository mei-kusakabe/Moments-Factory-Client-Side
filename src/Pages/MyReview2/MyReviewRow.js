import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MyReviewRow = ({ order, handleDelete, handleUpdate, handleUpdateChange }) => {

    const { _id, serviceName, customerName, message } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${_id}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [_id])

    return (
        <tr>
            <th>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>

                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />

            </td>
            <td>{message}</td>
            <th>

                <Link to={`/update/${_id}`}>
                    <button className='btn btn-info border'>
                        update
                    </button>
                    <label>
                        &nbsp;
                        <button onClick={() => handleDelete(_id)} className='btn btn-info border'>Delete</button>
                    </label>
                </Link>

            </th>
        </tr>
    );
};


export default MyReviewRow;