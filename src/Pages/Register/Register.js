import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaCameraRetro, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useTitle from '../hooks/useTitle';
import "./Register.css"
const Register = () => {
    useTitle('Register')
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (


        <div className="container-fluid vh-100">
            <div className="">
                <div className="rounded d-flex justify-content-center">
                    <div className="form col-md-4 col-sm-12 shadow-lg p-5 rounded  mt-3">
                        <div className="text-center">
                            <h3 className="text-white fw-bold fs-2">Welcome to Register Page!!</h3>
                        </div>
                        <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center border shadow-lg rounded-3 bg-light ">
                            <div className="p-4">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaUser></FaUser> </span>
                                    <input type="text" className="form-control" name="name" placeholder="Full Name" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaCameraRetro></FaCameraRetro> </span>
                                    <input type="text" className="form-control" name="photoURL" placeholder="Photo URL" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"> <FaEnvelope></FaEnvelope></span>
                                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaLock></FaLock></span>
                                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                                </div>

                                <Button variant="primary" className="btn-xl fw-bold" type="submit" > Register</Button>
                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                                <hr />

                                <p className='mt-3'>Already an User? <Link to="/login"> <span className='fw-bold text-black'>Click here to Login</span></Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;