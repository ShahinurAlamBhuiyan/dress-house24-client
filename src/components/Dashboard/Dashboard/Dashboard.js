import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddReview from '../AddReview/AddReview';
import AddServices from '../AddServices/AddServices';
import AllOrders from '../AllOrders/AllOrders';
import Orders from '../Orders/Orders';
import AllAdmin from '../AllAdmin/AllAdmin';
import { useHistory } from 'react-router';
import ManageServices from '../ManageServices/ManageServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome, faPlus, faShoppingCart, faUserPlus, faStar, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser, token, setToken] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const history = useHistory();

    const [serviceClick, setServiceClick] = useState(false);
    const [reviewClick, setReviewClick] = useState(false);
    const [allOrdersClick, setAllOrdersClick] = useState(false);
    const [adminClick, setAdminClick] = useState(false);
    const [allAdminClick, setAllAdminClick] = useState(false);
    const [manageClick, setManageClick] = useState(false);
    const [ordersClick, setOrdersClick] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/admin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setIsAdmin(true);
                    setAllOrdersClick(true)
                    setOrdersClick(false);
                }
                else {
                    setIsAdmin(false)
                }
            })
    }, [loggedInUser.email]);

    const handleService = () => {
        setServiceClick(true)
        setReviewClick(false)
        setOrdersClick(false)
        setAllOrdersClick(false)
        setAdminClick(false)
        setAllAdminClick(false)
        setManageClick(false)
    }
    const handleOrders = () => {
        setOrdersClick(true)
        setServiceClick(false)
        setReviewClick(false)
        setAllOrdersClick(false)
        setAdminClick(false)
        setAllAdminClick(false)
        setManageClick(false)
    }
    const handleReview = () => {
        setReviewClick(true)
        setServiceClick(false)
        setOrdersClick(false)
        setAllOrdersClick(false)
        setAdminClick(false)
        setAllAdminClick(false)
        setManageClick(false)
    }

    const handleAllOrders = () => {
        setAllOrdersClick(true)
        setServiceClick(false)
        setReviewClick(false)
        setOrdersClick(false)
        setAdminClick(false)
        setAllAdminClick(false)
        setManageClick(false)
    }
    const handleAdmin = () => {
        setAdminClick(true)
        setAllOrdersClick(false)
        setServiceClick(false)
        setReviewClick(false)
        setOrdersClick(false)
        setAllAdminClick(false)
        setManageClick(false)
    }
    const handleAllAdmin = () => {
        setAllAdminClick(true)
        setAdminClick(false)
        setAllOrdersClick(false)
        setServiceClick(false)
        setReviewClick(false)
        setOrdersClick(false)
        setManageClick(false)
    }
    const handleManage = () => {
        setManageClick(true)
        setAllAdminClick(false)
        setAdminClick(false)
        setAllOrdersClick(false)
        setServiceClick(false)
        setReviewClick(false)
        setOrdersClick(false)
    }

    const handleLogOut = ()=>{
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        setToken(null)
        setLoggedInUser('')
    }

    return (
        <div className='fontContainer1'>
            <div className='row'>
                <div className='col-md-3' style={{ backgroundColor: '#175d5b', height: '100vh', width: '100vw' }}>
                    <h5 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>{isAdmin ? 'ADMIN PANEL' : 'USER PANEL'}</h5>
                    <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                        {
                            !isAdmin && <>
                                <button className='btn btn-primary mt-3 w-75' onClick={handleOrders} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                    &nbsp;Your Orders</button>

                                <button className='btn btn-primary mt-3 w-75' onClick={handleReview} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faStar} />
                                &nbsp;Review</button>
                            </>
                        }

                        {
                            isAdmin && <>

                                <button className='btn btn-primary mt-3 w-75' onClick={handleAllOrders} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                &nbsp;Order list</button>
                                <button className='btn btn-primary mt-3 w-75' onClick={handleAllAdmin} style={{ color: 'white' }}>
                                    <FontAwesomeIcon icon={faUser} />
                                &nbsp; Admin list</button>
                                <button className='btn btn-primary mt-3 w-75' onClick={handleService} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faPlus} />
                                &nbsp; Add Service</button>

                                <button className='btn btn-primary mt-3 w-75' onClick={handleAdmin} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faUserPlus} />
                                &nbsp; Add Admin</button>
                                <button className='btn btn-primary mt-3 w-75' onClick={handleManage} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faPlus} />
                                &nbsp; Manage Services</button>
                            </>
                        }
                        <button className='btn btn-primary mt-3 w-75' onClick={()=> history.push('/')} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faHome} />
                                &nbsp; Home</button>
                        <button className='btn btn-danger mt-3 w-75' onClick={handleLogOut} style={{ color: 'white' }}><FontAwesomeIcon icon={faSignOutAlt} />
                            &nbsp; Log Out</button>
                    </div>
                </div>
                <div className='col-md-9'>
                    {serviceClick && <AddServices />}
                    {reviewClick && <AddReview />}
                    {ordersClick && <Orders />}
                    {allOrdersClick && <AllOrders />}
                    {adminClick && <AddAdmin />}
                    {allAdminClick && <AllAdmin />}
                    {manageClick && <ManageServices />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;