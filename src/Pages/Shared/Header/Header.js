import React, { useContext } from 'react';
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
                            <Navbar.Brand href="/home" className='fw-bold text-white mt-5 title'>Moment's Factory</Navbar.Brand>
                        </span>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="/home" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>Home</Nav.Link>
                            <Nav.Link href="/services" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>Services</Nav.Link>
                            {/* <Nav.Link href="/review" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>Review</Nav.Link> */}
                            <Nav.Link href="/blog" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>Blog</Nav.Link>
                            <Nav.Link href="/photogallery" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>Photo Gallery</Nav.Link>
                            <Nav.Link href="/contact" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>Contact</Nav.Link>

                            <Nav>
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <span className='fw-bold my-2 mx-2'>{user?.displayName}</span>

                                                <Nav.Link href="/orders" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>My Review</Nav.Link>

                                                {/* <button className="button1 px-5 py-1 mx-1   text-white border shadow"> <Link to={`/AddService`} style={{ textDecoration: 'none' }}> <span className='fw-bold'>Add Service</span></Link></button> */}
                                                <Nav.Link href="/AddService" className='pe-2 text-white fw-bold' style={{ textDecoration: 'underline', textDecorationColor: "white" }}>Add Service</Nav.Link>

                                                {/* <FaArrowRight onClick={handleLogOut}></FaArrowRight> */}
                                                <FaSignOutAlt className='sign-out fw-bold my-2 fs-4 mx-2' onClick={handleLogOut}></FaSignOutAlt>

                                                {/* <Button variant="light" onClick={handleLogOut}>Log out</Button> */}
                                            </>
                                            :

                                            <>
                                                <Link to='/login' style={{ textDecoration: 'underline', textDecorationColor: "white" }} className='text-white fw-bold'>Login</Link>
                                                {/* <Link to='/register' style={{ textDecoration: 'none' }} className='text-white fw-bold'>Register</Link> */}
                                            </>
                                    }


                                </>
                                {/* <Link to="/profile" style={{ textDecoration: 'none' }} className='text-white fw-bold'> */}
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '50px' }} data-toggle="tooltip"
                                        roundedCircle title={user?.displayName}
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser className='mt-2'></FaUser>
                                }
                                {/* </Link> */}
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;