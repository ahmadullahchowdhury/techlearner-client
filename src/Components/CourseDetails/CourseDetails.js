import React, { createRef } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = createRef()


const CourseDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='w-3/4 mx-auto'>
             <Pdf targetRef={ref} filename="course-deatils.pdf"   scale={0.8}>
        {({ toPdf }) => <button className='btn btn-success m-3' onClick={toPdf}>Download Course Details</button>}
      </Pdf>

    <div className='' ref={ref}>

            <h1>Course Details Page</h1>
            <p className='text-3xl m-4' >{data.name}</p>
            <img className='mx-auto' src={data.img} alt="img" ></img>
            <p className='m-4'>Total Number of Videos: {data.total_video}</p>
            <p className='w-1/2 mx-auto' >{data.course_details}</p>
            <button className="btn btn-primary m-2"><Link to = {`/checkout/${data.id}`} >Get Premium</Link></button>
    </div>
        </div>
    );
};

export default CourseDetails;