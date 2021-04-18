import React, { useContext, useState } from 'react';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddServices from '../AddServices/AddServices';
import AllAdmin from '../AllAdmin/AllAdmin';
import AllOrders from '../AllOrders/AllOrders';
import ManageServices from '../ManageServices/ManageServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faShoppingCart, faUserPlus, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';

const AdminDashboard = () => {
    const [loggedInUser, setLoggedInUser, token, setToken] = useContext(UserContext);
    const history = useHistory();
    const [orderClick, setOrderClick] = useState(true)
    const [adminClick, setAdminClick] = useState(false)
    const [addServiceClick, setAddServiceClick] = useState(false)
    const [addAdminClick, setAddAdminClick] = useState(false)
    const [manageClick, setManageClick] = useState(false)

    const handleAllOrders = () => {
        setOrderClick(true);
        setAdminClick(false)
        setAddServiceClick(false)
        setAddAdminClick(false)
        setManageClick(false)
    }
    const handleAllAdmin = () => {
        setOrderClick(false);
        setAdminClick(true)
        setAddServiceClick(false)
        setAddAdminClick(false)
        setManageClick(false)
    }
    const handleService = () => {
        setOrderClick(false);
        setAdminClick(false)
        setAddServiceClick(true)
        setAddAdminClick(false)
        setManageClick(false)
    }
    const handleAdmin = () => {
        setOrderClick(false);
        setAdminClick(false)
        setAddServiceClick(false)
        setAddAdminClick(true)
        setManageClick(false)
    }
    const handleManage = () => {
        setOrderClick(false);
        setAdminClick(false)
        setAddServiceClick(false)
        setAddAdminClick(false)
        setManageClick(true)
    }

    const handleLogOut = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        setToken(null)
        setLoggedInUser('')
    }

    return (
        <div className='row'>
            <div className='col-md-3' style={{ backgroundColor: '#175d5b', height: '100vh', width: '100vw' }}>
                <h5 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>ADMIN PANEL</h5>
                <div className='pl-2 pb-5'>
                    <button className='btn btn-primary mt-3 w-100' onClick={handleAllOrders} style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;Order list</button>

                    <button className='btn btn-primary mt-3 w-100' onClick={handleAllAdmin} style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faUser} />&nbsp; Admin list</button>

                    <button className='btn btn-primary mt-3 w-100' onClick={handleService} style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faPlus} />&nbsp; Add Service</button>

                    <button className='btn btn-primary mt-3 w-100' onClick={handleAdmin} style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faUserPlus} />&nbsp; Add Admin</button>

                    <button className='btn btn-primary mt-3 w-100' onClick={handleManage} style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faPlus} />&nbsp;Manage Services</button>

                    <button className='btn btn-primary mt-3 w-100' onClick={() => history.push('/')} style={{ color: 'white' }}><FontAwesomeIcon icon={faHome} />&nbsp; Home</button>

                    <button className='btn btn-danger mt-3 w-100' onClick={handleLogOut} style={{ color: 'white' }}><FontAwesomeIcon icon={faSignOutAlt} />&nbsp; Log Out</button>
                </div>
            </div>
            <div className='col-md-9'>
                {addServiceClick && <AddServices />}
                {orderClick && <AllOrders />}
                {addAdminClick && <AddAdmin />}
                {adminClick && <AllAdmin />}
                {manageClick && <ManageServices />}
            </div>
        </div>
    );
};

export default AdminDashboard;