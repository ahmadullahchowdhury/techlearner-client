import React from 'react';
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Course Details Page</h1>
            <p>{data.name}</p>
        </div>
    );
};

export default CourseDetails;