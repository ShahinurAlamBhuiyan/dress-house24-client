import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://dress-house.herokuapp.com/ordered?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email]);

    const classes = useStyles();
    return (
        <div className='container'>
            <div className='text-center'>
                <h3>Hello, {loggedInUser.email}</h3>
                <h4>You have total {orders.length} orders.</h4>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Date</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Service Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Cost</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map(order => (
                                <TableRow key={order._id}>
                                    <TableCell>{new Date(order.orderTime).toDateString('dd/MM/yyyy')}</TableCell>
                                    <TableCell>{order.service}</TableCell>
                                    <TableCell>$ {order.cost}</TableCell>
                                    <TableCell>{order.status}</TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;