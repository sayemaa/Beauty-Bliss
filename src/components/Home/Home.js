import React from 'react';
import useReviews from '../../hooks/useReviews';
import { useNavigate } from 'react-router-dom';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews] = useReviews();

    const navigate = useNavigate();

    const seeAllReviews = () => {
        const path = `/reviews`;
        navigate(path);
    }

    return (
        <div>
            <div className='home-container d-flex container mx-auto align-items-center mb-5'>
                <div className="text-container text-start me-5">
                    <h1 className='home-text-title'><span className='let-your'>Let Your </span><br /><span className='beauty-glow'>Beauty Glow</span></h1>
                    <p>Our goal is to inspire products that are good for your skin. We are committed to curating the best of beauty so that you can glow with our products.</p>
                    <button className='shop-now-btn'>Shop Now</button>
                </div>
                <div className="img-container mt-5 ms-4">
                    <img src="https://pngimage.net/wp-content/uploads/2018/06/productos-maquillaje-png-3.png" alt="" />
                </div>
            </div>
            <div className='mb-5'>
                <h2>Customer Reviews</h2>
                <div className='reviews-container container mt-5 '>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <button onClick={seeAllReviews} className='see-all-reviews-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;