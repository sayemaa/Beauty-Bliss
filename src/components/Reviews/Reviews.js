import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='container mt-4 mb-5'>
            <h1 className='mb-4'>What our customers say!</h1>
            <div className='mt-5 reviews-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;