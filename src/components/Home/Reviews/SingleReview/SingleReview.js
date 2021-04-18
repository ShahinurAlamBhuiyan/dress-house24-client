import React from 'react';

const SingleReview = ({ review: { name, description, image, img, address } }) => {
    return (
        <div className='mb-4 ml-4 mb-5'>
            <div className="card shadow-sm" style={{width:'350px', height:'300px'}}>
                <div className="card-body">
                    <p className="card-text text-secondary text-justify review-description">{description}</p>
                </div>
                <div className="card-footer d-flex justify-content-center  align-items-center pr-5">
                        {
                            image ? <img width='60' height='60' style={{ borderRadius: '50%' }} className='mx-3' src={`data:image/png;base64,${image.img}`} />
                                :
                                <img src={`http://localhost:3000/${img}`} alt="" />
                        }
                    <div>
                        <h6 className="text-brand">{name}</h6>
                        <small>from {address}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;