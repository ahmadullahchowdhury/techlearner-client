import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container mx-auto">
      <h1>This is Courses</h1>

      <div className="flex flex-col w-full lg:flex-row">
        <div className=" p-6 h-1/2 card bg-base-300 rounded-box place-items-center">
          {data.map((course) => (
            <Link to={`/courses/${course.id}`} className="p-2" key={course.id}>
             {course.id} {course.name}
            </Link>
          ))}
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className=" grid grid-cols-3 card bg-base-300 rounded-box place-items-center">
          {data.map((course) => (
            <div key={course.id} className="card w-96 bg-base-100 shadow-xl">
              <figure className="  px-10 pt-10">
                <img
                  src = {course.img}
                  alt="img"
                  className="rounded-xl "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{course.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
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
