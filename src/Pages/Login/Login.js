
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useTitle from '../hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import './Login.css'

const Login = () => {

    useTitle('Login')


    const { loading } = useContext(AuthContext);


    const { providerLogin, setUser, setLoading, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    if (loading) {
        return <Spinner animation='border' variant='primary' />
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                setError('');

                // get jwt token
                fetch('https://moment-factory.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('moment-token', data.token);
                        navigate(from, { replace: true });
                    });

            })

            .catch(error => {
                console.error(error)
                setError(error.message);
            })

            .finally(() => {
                setLoading(false);
            });
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                form.reset();
                setError('');


                // get jwt token
                fetch('https://moment-factory.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('moment-token', data.token);
                        navigate(from, { replace: true });
                    });

            })

            .catch(error => {
                console.error(error)
                setError(error.message);
            })

            .finally(() => {
                setLoading(false);
            });
    }


    return (

        <div className="container-fluid login my-3">
            <div className="rounded d-flex justify-content-center">
                <div className="form col-md-4 col-sm-12 shadow-lg p-5 rounded  mt-3">
                    <div className="text-center">
                        <h3 className="text-white fw-bold fs-2">Please Log in!!</h3>
                    </div>
                    <Form onSubmit={handleSubmit} className="mt-3 py-3 border shadow-lg rounded-3 bg-light box2">
                        <div className="p-4">
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-light"> <FaEnvelope></FaEnvelope></span>
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-light"><FaLock></FaLock></span>
                                <input type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            <Button variant="primary" className="btn-xl fw-bold" type="submit">Login</Button>
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                            <hr />
                            <h5>OR</h5>
                            <div>
                                <ButtonGroup vertical>
                                    <Button onClick={handleGoogleSignIn} className='mb-2 fw-bold' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                                </ButtonGroup>
                            </div>
                            <p className='mt-3'>Need an Account? </p>
                            <Link to="/register"> <span className='fw-bold text-black'> Click here to Register</span></Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    );
};

export default Login;