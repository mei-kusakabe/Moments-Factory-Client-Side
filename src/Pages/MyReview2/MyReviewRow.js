import React, { useEffect, useState } from 'react';

const MyReviewRow = ({ order, handleDelete, handleStatusUpdate }) => {

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
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
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
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                {/* <span className="badge badge-ghost badge-sm">${message}</span> */}
            </td>
            <td>{message}</td>
            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-info"></button>
            </th>
        </tr>
    );
};


export default MyReviewRow;