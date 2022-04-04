import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container className='d-flex justify-content-between'>
                    <Navbar.Brand className='nav-title'>Beauty Bliss</Navbar.Brand>
                    <Nav>
                        <CustomLink to='/home' className='nav-links'>Home</CustomLink>
                        <CustomLink to='/reviews' className='nav-links'>Reviews</CustomLink>
                        <CustomLink to='/dashboard' className='nav-links'>Dashboard</CustomLink>
                        <CustomLink to='/about' className='nav-links'>About</CustomLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;