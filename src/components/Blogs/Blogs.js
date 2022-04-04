import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-4'>
            <h2>Frequently Asked Questions</h2>
            <div className='single-faq shadow'>
                <h5>What is Context API?</h5>
                <p>Props are typically used to share code from one component to another. However, if we want to share code between the root component and the child component at the very end, props must be provided to each component from the root for that child component to receive that code. An alternate solution to this drawn-out method is to use Context API. Instead of passing props at each level, context is used to transfer data across the component tree. Context is created in the root component and exported to the components we wish to transfer data to.</p>
            </div>
            <div className='single-faq shadow'>
                <h5>What is Semantic Tag?</h5>
                <p>HTML5 features semantic tags, which is one of the primary distinctions between HTML4 and HTML5. In HTML5, semantic tags were introduced. Semantic tags give a web page meaning in addition to its appearance. Instead of employing div tags for all of our web page's sections, we may utilize semantic tags like header, nav, section, article, and footer tags. These tags give our code additional significance and make it easier to understand.</p>
            </div>
        </div>
    );
};

export default Blogs;