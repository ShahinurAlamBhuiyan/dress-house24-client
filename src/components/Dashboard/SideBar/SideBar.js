import React from 'react';

const handleReview = () =>{
    console.log('click')
}

const SideBar = () => {
    return (
        <div className=''>
            <div className='row'>
                <div className='col-md-3' style={{ backgroundColor: 'navy', height: '100vh', width: '100vw' }}>
                    <h5 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>ADMIN PANEL</h5>
                    <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                        <button className='btn btn-primary' style={{ color: 'white' }}>Manage photo</button>
                        <button className='btn btn-primary' style={{ color: 'white' }}>Add photo</button>
                        <button className='btn btn-primary' onClick={(handleReview)} style={{ color: 'white' }}>Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;