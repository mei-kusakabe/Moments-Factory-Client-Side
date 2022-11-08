import React, { useContext, useEffect, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Header.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='header'>
            <Navbar collapseOnSelect className='nav-bg text-white' expand="lg" variant="light">
                <Container>
                    <div>
                        <span>
                            <img src="https://cdn-icons-png.flaticon.com/512/1042/1042339.png" alt="Logo" width="50" height="35" className="d-inline-block align-text-top" />
                            <Navbar.Brand href="/home" className='fw-bold text-white mt-5'>Moment's Factory</Navbar.Brand>
                        </span>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="/home" className='pe-2 text-white fw-bold'>Home</Nav.Link>
                            <Nav.Link href="/services" className='pe-2 text-white fw-bold'>Services</Nav.Link>
                            <Nav.Link href="/review" className='pe-2 text-white fw-bold'>Review</Nav.Link>
                            <Nav.Link href="/blog" className='pe-2 text-white fw-bold'>Blog</Nav.Link>
                            <Nav>
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <span className='fw-bold my-2 mx-2'>{user?.displayName}</span>

                                                {/* <FaArrowRight onClick={handleLogOut}></FaArrowRight> */}
                                                <FaSignOutAlt className='fw-bold my-2 fs-4 mx-2' onClick={handleLogOut}></FaSignOutAlt>

                                                {/* <Button variant="light" onClick={handleLogOut}>Log out</Button> */}
                                            </>
                                            :
                                            <>
                                                <Link to='/login' style={{ textDecoration: 'none' }} className='text-white fw-bold'>Login</Link>
                                                {/* <Link to='/register' style={{ textDecoration: 'none' }} className='text-white fw-bold'>Register</Link> */}
                                            </>
                                    }


                                </>
                                <Link to="/profile" style={{ textDecoration: 'none' }} className='text-white fw-bold'>
                                    {user?.photoURL ?
                                        <Image
                                            style={{ height: '50px' }} data-toggle="tooltip"
                                            roundedCircle title={user?.displayName}
                                            src={user?.photoURL}>
                                        </Image>
                                        : <FaUser></FaUser>
                                    }
                                </Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;