import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center px-5'>
            <img className='not-found-img w-50 h-50 m-0' src="https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg" alt="" />
            <h1>Page Not Found</h1>
            <p>The page you were looking for could not be found.</p>
        </div>
    );
};

export default NotFound;