import React from 'react';
import wallet from '../../../images/advantage-icon/walletAd.png';
import diamond from '../../../images/advantage-icon/diamondAd.png';
import globe from '../../../images/advantage-icon/globeAd.png';

const cardStyle = {
    boxShadow: '2px 2px 10px gray',
    margin: '5px',
    borderRadius: '10px'
}

const Advantages = () => {
    return (
        <div className='mt-5 mb-3 pb-2 container'>
                <div className='text-center fontContainer'>
                    <h1>Our Advantages</h1>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum culpa corrupti impedit itaque eligendi!olor sit <br /> amet consectetur adipisicing elit. Quaerat dolorum culpa corrupti impedit itaque eligendi!</p>
                </div>
                <div className='d-flex justify-content-center advantageContainer'>
                    <div className='' style={cardStyle}>
                        <div className='d-flex justify-content-center p-3'>
                            <img src={wallet} alt="" style={{ width: '60px' }} />
                        </div>
                        <h4 className='text-center fontContainer'>100% Money Back <br />Guarantee </h4>
                        <p className='text-justify p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis odio ad commodi quo qui accusantium ab esse enim velit! Molestiae, repellendus accusantium tenetur tempore perferendis suscipit similique totam vel.</p>
                    </div>
                    <div className='' style={cardStyle}>
                        <div className='d-flex justify-content-center p-3'>
                            <img src={diamond} alt="" style={{ width: '60px' }} />
                        </div>
                        <h4 className='text-center fontContainer'>Express Service <br />for Shortening Trousers </h4>
                        <p className='text-justify p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis odio ad commodi quo qui accusantium ab esse enim velit! Molestiae, repellendus accusantium tenetur tempore perferendis suscipit similique totam vel.</p>
                    </div>
                    <div className='' style={cardStyle}>
                        <div className='d-flex justify-content-center p-3'>
                            <img src={globe} alt="" style={{ width: '60px' }} />
                        </div>
                        <h4 className='text-center fontContainer'>100% Money Back <br />Guarantee </h4>
                        <p className='text-justify p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis odio ad commodi quo qui accusantium ab esse enim velit! Molestiae, repellendus accusantium tenetur tempore perferendis suscipit similique totam vel.</p>
                    </div>
                </div>
        </div>
    );
};

export default Advantages;