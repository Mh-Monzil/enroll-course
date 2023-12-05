import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';

const Header = (props) => {
    const course = props.course;
    return (
        <div className='text-center header'>
            <span className='mt-5 mb-3 d-inline-block p-2 fw-bold rounded'>{course.length} Courses</span>
            <h1 className=''>Upcoming Live Batch</h1>
            <p className='p-4'>Join live batch now to stay ahead of everyone.</p>
        </div>
    );
};

export default Header;