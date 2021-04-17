import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';
import CircularProgress from '@material-ui/core/CircularProgress';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container fontContainer'>
            <h1 className='text-center'>Customer's Review is most valuable for us.</h1>
            {
                reviews.length ?
                    <div className='row mt-5 pt-3'>
                        {
                            reviews.map(review => <SingleReview review={review} key={review._id} />)
                        }
                    </div> :
                    <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                        <CircularProgress color='secondary' />
                        <p className='pt-4'>Please wait...</p>
                    </div>
            }
        </div>
    );
};

export default Reviews;