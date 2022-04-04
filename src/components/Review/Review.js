import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const { name, picture, post, ratings } = props.review;
    return (
        <Container>
            <Row>
                <Col className='card shadow mb-3 py-5'>
                    <div>
                        <img src={picture} alt="" />
                        <h5>{name}</h5>
                    </div>
                    <div className='text-center mt-2'>
                        <h6>Ratings: {ratings}</h6>
                        <p>{post}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Review;