import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const { name, picture, post, ratings } = props.review;
    return (
        <Container>
            <Row>
                <Col className='card shadow mb-3 py-5'>
                    <div className='d-flex align-items-center'>
                        <img src={picture} alt="" />
                        <h5>{name}</h5>
                    </div>
                    <div className='text-start mt-3'>
                        <p>{post}</p>
                        <p>Ratings: {ratings}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Review;