import React from 'react';
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>This is checkout page</h1>
            <p className='text-3xl'>Congrats, you bought: {data.name}</p>
        </div>
    );
};

export default CheckOut;