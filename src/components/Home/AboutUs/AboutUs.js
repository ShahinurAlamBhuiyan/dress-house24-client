import React from 'react';
import aboutImg from '../../../images/aboutUs.jpeg'

const AboutUs = () => {
    return (
        <section className=" pb-0 pb-md-5 mt-5 fontContainer">
            <div className="container">
                        <h1>About Us</h1>
                <div className="row">
                    <div className="col-md-7">
                        <p className="text-secondary text-justify">
                        Tailoring is a small business but garment is a business with a vast word. Tailoring business is run by one administration and a few tailors are work to give the production. In a tailoring shop a cutting master is required to take the measurement from the customer’s selected person who want to make a garment by his/her own body shape different part of body and cut the fabric, send them to tailor to sewing, make a desire dress to look them perfect. <br/> <br/>
                        Ironing or calendaring is required to give the perfect satisfaction to the customer after complete the dress. Some time the cutting master also does the job as a tailor. Tailoring system has own style like one tailor only sewing one type of dress, if the tailor sewing pant than tailor must sewing pant not shirt. A shirt is takes a little long to complete in tailoring system than garment industrial system.One the other hand the garments industry system makes thousand of dress by three different size by taking baby, man and women body’s ideal shape and measurement. Garments system make pattern using marker and cut thousand of pieces of garments piece at a time and make them full useable garment after sewing and finishing. Garments and tailoring is same state .
                        </p>
                        <button className="btn btn-primary mb-3">Learn More</button>
                    </div>
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;