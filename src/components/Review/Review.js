import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css'

const Review = ({ review }) => {
    const { name, picture, post, ratings } = review;
    return (
        <Container>
            <Row className='card-container mx-auto h-100'>
                <Col className='card shadow mb-3 py-4'>
                    <div>
                        <img src={picture} alt="" />
                        <h5>{name}</h5>
                    </div>
                    <div className='text-center mt-2'>
                        <p>{post}</p>
                        <h6><small>Rating: {ratings}</small></h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Review;