import React from 'react';
import workImg1 from '../../../images/workImg/work1.jpeg'
import workImg2 from '../../../images/workImg/work2.jpeg'
import workImg3 from '../../../images/workImg/work3.jpeg'

const OurWork = () => {
    return (
        <section className='mt-5 mb-3 fontContainer'>
            <div className='text-center'>
            <h2>OUR WORK</h2>
            <p className=''>Ironing or calendaring is required to give the perfect <br/> satisfaction to the customer after complete the dress. Some time the cutting master also does the job as a tailor. </p>
            </div>
            <div className='d-flex justify-content-center flex-wrap pt-4'>
                <img style={{width:'400px', height:'500px', margin:'4px'}} src={workImg1} alt=""/>
                <img style={{width:'400px', height:'500px', margin:'4px'}} src={workImg2} alt=""/>
                <img style={{width:'400px', height:'500px', margin:'4px'}} src={workImg3} alt=""/>
            </div>
        </section>
    );
};

export default OurWork;