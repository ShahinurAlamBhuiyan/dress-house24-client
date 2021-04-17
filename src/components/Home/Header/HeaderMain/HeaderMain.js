import React from 'react';
import tailorImg from '../../../../images/tailorGuyBanner.jpeg'

const HeaderMain = () => {
    return (
        <main className='row d-flex align-items-center' style={{height:'600px'}}>
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 fontContainer">
                <h1 >We are the best <br/> Tailor </h1>
                <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nisi quisquam optio temporibus dignissimos quos nobis corporis quia culpa aliquam.</p>
                <button className='btn btn-primary' >GET APPOINTMENT</button>
            </div>
            {/* <div className="col-md-5">
                <img src={tailorImg} alt="" className="img-fluid"/>
            </div> */}
        </main>
    );
};

export default HeaderMain;