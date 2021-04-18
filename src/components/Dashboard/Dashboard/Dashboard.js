import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';
// import AddAdmin from '../AddAdmin/AddAdmin';
// import AddReview from '../AddReview/AddReview';
// import AddServices from '../AddServices/AddServices';
// import AllOrders from '../AllOrders/AllOrders';
// import Orders from '../Orders/Orders';
// import AllAdmin from '../AllAdmin/AllAdmin';
// import { useHistory } from 'react-router';
// // import ManageServices from '../ManageServices/ManageServices';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome, faPlus, faShoppingCart, faUserPlus, faStar, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://dress-house.herokuapp.com/admin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setIsAdmin(true);
                }
                else {
                }
            })
    }, [loggedInUser.email]);

    return (
        <div className='fontContainer1'>
            {
                isAdmin && <AdminDashboard />
            }
            {
                !isAdmin && <UserDashboard />
            }
        </div>
    );
};

export default Dashboard;