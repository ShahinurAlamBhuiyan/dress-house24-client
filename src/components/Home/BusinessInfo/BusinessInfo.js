import React from 'react';
import InfoCard from './InfoCard/InfoCard'
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const infoData = [
    {id:1 ,title:'FOUND DEALER', icon:faMapMarker, background:'secondary'},
    {id:2 ,title:'ONLINE ORDER', icon:faClock, background:'dark'},
    {id:3 ,title:'CONTACT US', icon:faPhone, background:'primary'}
]
const BusinessInfo = () => {
    return (
        <div className='d-flex justify-content-center flex-wrap mt-4'>
            {
                infoData.map(data => <InfoCard data={data} key={data.id} /> )
            }
        </div>
    );
};

export default BusinessInfo;