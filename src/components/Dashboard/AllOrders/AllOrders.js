import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const AllOrders = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('https://dress-house.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders]);

    const handleDoneStatus = (id) => {
        const updateData = {
            status: 'Done'
        }
        fetch(`https://dress-house.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('updated done');
            })
    }
    const handleOngoingStatus = (id) => {
        const updateData = {
            status: 'Ongoing'
        }
        fetch(`https://dress-house.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('updated ongoing')
            })
    }

    const classes = useStyles();
    console.log(allOrders)
    return (
        <div className='mt-3'>
            <h3 className='text-center pt-3'>Welcome {loggedInUser.email}, You have total {allOrders.length} orders.</h3>
            <TableContainer component={Paper} className='orderTableContainer'>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Customer Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Service Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Phone Number</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Email</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Location</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Status</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Condition</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allOrders.map(order => (
                                <TableRow key={order._id}>
                                    <TableCell>
                                        {order?.shipmentDetails?.name}
                                    </TableCell>
                                    <TableCell>{order.service}</TableCell>
                                    <TableCell>{order.shipmentDetails?.phone}</TableCell>
                                    <TableCell>{order.email}</TableCell>
                                    <TableCell>{order?.shipmentDetails?.address}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    {
                                        order?.status === "Ongoing" &&
                                        <TableCell>
                                            <button className="btn btn-success w-100" onClick={() => handleDoneStatus(order._id)} >Done</button>
                                        </TableCell>
                                    }
                                    {
                                        order?.status === "Pending" &&
                                        <TableCell>
                                            <button className="btn btn-info w-100" onClick={() => handleOngoingStatus(order._id)} >Ongoing</button>
                                        </TableCell>
                                    }
                                    {
                                        order?.status === "Done" &&
                                        <TableCell>
                                            <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faPhone} /></button>
                                        </TableCell>
                                    }
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllOrders;