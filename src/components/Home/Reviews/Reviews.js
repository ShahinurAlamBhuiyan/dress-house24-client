import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';
import CircularProgress from '@material-ui/core/CircularProgress';
import Carousel from 'react-elastic-carousel';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
]

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://dress-house.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='fontContainer'>
            <h1 className='text-center mb-4 mt-2'>Customer's Review is most valuable for us.</h1>
            {
                reviews.length ?
                <Carousel className='d-flex justify-content-center flex-wrap' breakPoints={breakPoints}>
                        {
                            reviews.map(review => <SingleReview review={review} key={review._id} />)
                        }
                    </Carousel> :
                    <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                        <CircularProgress color='secondary' />
                        <p className='pt-4'>Please wait...</p>
                    </div>
            }
        </div>
    );
};

export default Reviews;