import React from 'react';
import { useHistory } from 'react-router';

const SingleService = ({ service: { name, cost, img, image, _id } }) => {
    const history = useHistory()
    return (
        <div className='ml-4 car' style={{ cursor: 'pointer' }} onClick={() => history.push(`/book/${_id}`)}>
            <div className='d-flex justify-content-center'>
                {
                    image ? <img style={{ height: '270px', width: '270px', borderRadius: '50%' }} src={`data:image/png;base64,${image.img}`} />
                        :
                        <img style={{ height: '270px', width: '270px', borderRadius: '50%' }} src={`http://localhost:3000/${img}`} alt="" />
                }

            </div>
            <div className='info'>
                <h3 className='text-center pt-3'>{name}</h3>
                <h5 className='text-center'>Cost $ {cost}</h5>
            </div>
        </div>
    );
};

export default SingleService;