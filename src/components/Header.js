import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../store/reducers/auth/actions';

const Header = () => {

    return (
        <Navbar>
            <Navbar.Brand className="p-2">
                <Link to={'/'}>Emaily</Link>
            </Navbar.Brand>
            <Navbar.Text className="ms-auto me-2 p-1">
                <Link to={'/surveys'}>My Surveys</Link>
            </Navbar.Text>
            <Navbar.Text className="me-2 p-1">
                <Link to={'/surveys/new'}>New Survey</Link>
            </Navbar.Text>
            <Navbar.Text className="p-1">Login with Google</Navbar.Text>
        </Navbar>
    )
};

export default Header;