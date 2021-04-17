import React, { useEffect, useState } from 'react';
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

const AllAdmin = () => {
    const [ allAdmins, setAllAdmins ] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allAdmins')
            .then(res => res.json())
            .then(data => setAllAdmins(data))
    }, []);
    const classes = useStyles();
    console.log(allAdmins)
    return (
        <div>
            <h3>Total {allAdmins.length} admin for this site</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allAdmins.map(admin => (
                                <TableRow key={admin.name}>
                                    <TableCell>{admin?.name}</TableCell>
                                    <TableCell>{admin?.email}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllAdmin;