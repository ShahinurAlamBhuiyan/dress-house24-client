import React, { useContext, useState } from 'react';
import AddReview from '../AddReview/AddReview';
import Orders from '../Orders/Orders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faStar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';

const UserDashboard = () => {
    const [loggedInUser, setLoggedInUser, token, setToken] = useContext(UserContext);
    const [orderClick, setOrderClick] = useState(true)
    const [reviewClick, setReviewClick] = useState(false)
    const history = useHistory();

    const handleOrders = () => {
        setOrderClick(true)
        setReviewClick(false)
    }
    const handleReview = () => {
        setOrderClick(false)
        setReviewClick(true)
    }

    const handleLogOut = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        setToken(null)
        setLoggedInUser('')
    }

    return (
        <div className='row'>
            <div className="col-md-3" style={{ backgroundColor: '#175d5b', height: '100vh', width: '100vw'}}>
                <h5 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>User PANEL</h5>
                <div className='pl-2'>
                    <button className='btn btn-primary mt-3 w-100' onClick={handleOrders} style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                                    &nbsp;Your Orders</button>

                    <button className='btn btn-primary mt-3 w-100' onClick={handleReview} style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faStar} />&nbsp;Review</button>

                    <button className='btn btn-primary mt-3 w-100' onClick={() => history.push('/')} style={{ color: 'white' }}><FontAwesomeIcon icon={faHome} />&nbsp; Home</button>

                    <button className='btn btn-danger mt-3 w-100' onClick={handleLogOut} style={{ color: 'white' }}><FontAwesomeIcon icon={faSignOutAlt} />&nbsp; Log Out</button>
                </div>
            </div>
            <div className="col-md-9">
                {orderClick && <Orders />}
                {reviewClick && <AddReview />}
            </div>
        </div>
    );
};

export default UserDashboard;