import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';
import CircularProgress from '@material-ui/core/CircularProgress';

const OurServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://dress-house.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className='d-flex justify-content-center mt-5 fontContainer '>
            <div>
                <div className='text-center'>
                    <h1>What we offer of Clients</h1>
                    <p className='text-center container'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sequi  molestiae rerum! Voluptate, perspiciatis sequi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, delectus.</p>
                </div>
                {
                    services.length ?
                        <div className='d-flex justify-content-center align-items-center flex-wrap mt-5'>
                            {services.map(service => <SingleService service={service} key={service._id} />)}
                        </div>
                        :
                        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                            <CircularProgress color='secondary' />
                            <p className='pt-4'>Please wait...</p>
                        </div>
                }
            </div>
        </section>
    );
};

export default OurServices;