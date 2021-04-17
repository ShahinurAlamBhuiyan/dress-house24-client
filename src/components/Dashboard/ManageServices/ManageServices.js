import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ManageServices = () => {
    const [services, setServices] = useState([])
    const [ids, setIds] = useState(null);
    useEffect(() => {
        const all = services.filter(service => service._id !== ids)
        setServices(all)
    }, [ids])


    const deletePhoto = id => {
        setIds(id)
        console.log(id)
        fetch(`https://dress-house.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    useEffect(() => {
        fetch('https://dress-house.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    const classes = useStyles();
    return (
        <div>
            {
                services.length ?
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {/* <TableCell style={{ fontWeight: '700' }}>Date</TableCell> */}
                                    <TableCell style={{ fontWeight: '700' }}>Service Name</TableCell>
                                    <TableCell style={{ fontWeight: '700' }}>Cost</TableCell>
                                    <TableCell style={{ fontWeight: '700' }}>Remove</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    services.map(service => (
                                        <TableRow>
                                            {/* <TableCell>{new Date(service.orderTime).toDateString('dd/MM/yyyy')}</TableCell>*/}
                                            <TableCell> {service.name}</TableCell>
                                            <TableCell>{service.cost}</TableCell>
                                            <TableCell>
                                                <Button onClick={() => deletePhoto(service._id)} size='small' color='secondary'><DeleteForeverIcon /></Button></TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                        <CircularProgress color='secondary' />
                        <p className='pt-4'>Please wait...</p>
                    </div>
            }

        </div>
    );
};

export default ManageServices;