import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name,price} = props;
    return (
        <div className='course-container'>
            <h3>{name}</h3>
            <div className='d-flex justify-content-evenly'>
                <h4>Price : {price} BDT</h4>
                <button onClick={props.clickButton}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;