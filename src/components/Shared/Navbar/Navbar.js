import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/loginImg/loginBG.png'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser, token, setToken] = useContext(UserContext);
    const history = useHistory();
    const handleLogOut = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        setToken(null)
        setLoggedInUser('')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light fontContainer">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width='60' height='60' alt="" />
                    <span style={{ color: 'black', fontWeight: '700' }}>&nbsp; DRESS HOUSE</span> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item  text-center">
                            <Link className="nav-link mr-5" to="/home">Home</Link>
                        </li>
                        <li className="nav-item  text-center">
                            <Link className="nav-link mr-5" to="/">Services</Link>
                        </li>
                        <li className="nav-item  text-center">
                            <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link> </li>
                        <li className="nav-item  text-center">
                            <Link className="nav-link mr-5 " to="/">Reviews</Link>
                        </li>
                        <li className="nav-item  text-center">
                            <Link className="nav-link mr-5 " to="/">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link mr-5 d-flex justify-content-center'>
                                {
                                    loggedInUser.email ? <button onClick={handleLogOut} className='btn btn-danger  text-white'>LogOut</button> : <button onClick={() => history.push('/login')} className='btn btn-primary text-white'>Login</button>
                                }
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;