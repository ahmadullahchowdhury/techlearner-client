import React from 'react';
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Course Details Page</h1>
            <p className='text-3xl m-2' >{data.name}</p>
            <img className='mx-auto' src={data.img} alt="img" ></img>
            <p className='m-2'>Total Number of Videos: {data.total_video}</p>
            <p className='w-1/2 mx-auto' >{data.course_details}</p>
            <button className="btn btn-primary"><Link to = {`/checkout/${data.id}`} >Get Premium</Link></button>
        </div>
    );
};

export default CourseDetails;