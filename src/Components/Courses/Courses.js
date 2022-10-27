import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container mx-auto">
      <h1 className="text-bold text-white text-4xl mt-7 mb-7">Explore Our All Courses</h1>

      <div className="flex flex-col w-full lg:flex-row">
        <div className=" p-6 w-72 h-1/2 card bg-base-300 rounded-box place-items-center">
            <p className="text-2xl font-semibold">Popular Courses </p>
            {/* sidebar */}
          {data.map((course) => (
            <Link to={`/courses/${course.id}`} className="p-2" key={course.id}>
              {course.name}
            </Link>
          ))}
        </div>
        <div className="divider lg:divider-horizontal"></div>
        
        <div className=" lg:grid grid-cols-3 card bg-base-300 rounded-box place-items-center">
        {/* main section */}
          {data.map((course) => (
            <div key={course.id} className="card w-96 bg-base-100 shadow-xl">
              <figure className="   pt-10">
                <img
                  src = {course.img}
                  alt="img"
                  className="rounded "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title p-3">{course.name}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary"><Link to={`/courses/${course.id}`}>Course Details</Link></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Courses;
