import React, { useState } from 'react';
import './Main.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import {Container, Row } from 'react-bootstrap';

const Main = (props) => {
    const courseDetails = props.details;
    console.log(courseDetails);
    const [cart, setCart] = useState([]);
    const handleClick = (course) => {
        console.log("click")
        const newCart = [...cart, course];
        setCart(newCart);
    }
    
    return (
        <div className='main container'>
            <div className=''>
                <Container className='con'>
                    <h4 className='course-name'>কোর্স সমূহ</h4>
                    <Row className='row'>
                        {
                        courseDetails.map(course => <Course name={course.name} price={course.price} image={course.image} key={course.id} clickButton={() => handleClick(course)}></Course>)
                        }
                    </Row>
                </Container>
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Main;