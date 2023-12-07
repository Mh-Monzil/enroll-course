import React from 'react';
import './Course.css'
import { Card, CardBody, CardFooter, CardGroup, CardImg, CardText, CardTitle, Col} from 'react-bootstrap';

const Course = (props) => {
    const {name,price,image} = props;
    return (
            <Col md={4} className='course-container'>
                <CardGroup>
                    <Card className='card'>
                        <Card.Img src={image} />
                        <Card.Body className='card-body'>
                            <Card.Title>
                                <h3>{name}</h3>
                            </Card.Title>
                        </Card.Body>
                        <CardFooter className='footer'>
                            <h5>Price : {price} BDT</h5>
                            <button onClick={props.clickButton}>Enroll Now</button>
                        </CardFooter>
                    </Card>
                </CardGroup>
            </Col>
    );
};

export default Course;
