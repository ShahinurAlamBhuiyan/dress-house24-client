import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import AddReview from '../AddReview/AddReview';
import Orders from '../Orders/Orders';
import './Book.css'
import ProcessPayment from './ProcessPayment/ProcessPayment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faStar, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Book = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [shipmentData, setShipmentData] = useState({});
    const [loggedInUser, setLoggedInUser, token, setToken] = useContext(UserContext)
    const history = useHistory()
    const onSubmit = data => {
        setShipmentData(data);
    }
    const { _id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://dress-house.herokuapp.com/service/' + _id, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setService(data))
    }, [_id])

    const handlePayment = (paymentId) => {
        const bookingDetails = { ...loggedInUser, cost: service.cost, status: 'Pending', service: service.name, shipmentDetails: shipmentData, paymentId, orderTime: new Date() }
        fetch('https://dress-house.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully')
                    history.push('/dashboard')
                }
            })
    }

    const [clickOrders, setClickOrders] = useState(false)
    const [clickReview, setClickReview] = useState(false)
    const handleOrders = () => {
        setClickOrders(true)
        setClickReview(false)
    }
    const handleReview = () => {
        setClickOrders(false)
        setClickReview(true)
    }
    const handleLogOut = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        setToken(null)
        setLoggedInUser('')
    }

    return (
        <div className='row'>

            <div className="col-md-3" style={{ backgroundColor: '#175d5b', height: '100vh', width: '100vw' }}>

                <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                    {
                        loggedInUser?.email && <>
                            <button className='btn btn-primary mt-3 w-75' onClick={handleOrders} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                    &nbsp; Your Orders</button>

                            <button className='btn btn-primary mt-3 w-75' onClick={handleReview} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faStar} />
                                    &nbsp; Review</button>
                            <button className='btn btn-primary mt-3 w-75' onClick={() => history.push('/')} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faHome} />
                                    &nbsp; Home</button>
                            <button className='btn btn-danger mt-3 w-75' onClick={handleLogOut} style={{ color: 'white' }}>
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                    &nbsp; Log Out</button>
                        </>
                    }
                </div>

            </div>
            <div className="col-md-9">
                <div className="d-flex justify-content-around flex-wrap">
                    <div >
                        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                            <input   {...register("name", { required: true })} placeholder='Your name' />
                            {errors.name && <span className='error'>Name is required</span>}

                            <input  {...register("address", { required: true })} placeholder='Your address' />
                            {errors.address && <span className='error'>Address is required</span>}

                            <input  {...register("phone", { required: true })} placeholder='Your phone number' />
                            {errors.phone && <span className='error'>Phone Number is required</span>}
                            <input className='btn btn-warning' type="submit" />
                        </form>
                    </div>
                    <div>
                        <h2>Please pay for Us</h2>
                        <ProcessPayment key={_id} handlePayment={handlePayment} />
                    </div>
                </div>
                {clickOrders && <Orders />}
                {clickReview && <AddReview />}
            </div>
        </div>
    );
};

export default Book;