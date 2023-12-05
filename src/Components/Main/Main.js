import React, { useState } from 'react';
import './Main.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

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
            <div className='container'>
                {
                    courseDetails.map(course => <Course name={course.name} price={course.price} key={course.id} clickButton={() => handleClick(course)}></Course>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Main;