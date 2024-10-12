import React from "react";

function Card({
  link,
  name,
  age,
  email,
  address,
  phone,
}) {

  return (

      <div className="w-96 h-96 shadow-md rounded-md p-5 bg-white flex flex-col justify-center transition ease-in hover:-translate-y-1">
        <div className="w-full flex flex-col justify-center items-center mb-5">
          <img className='rounded-full' src={link} alt="" />   
          <h2 className='font-bold m-2 text-2xl'>{name}</h2>
        </div>
        <div className="w-full text-lg">
          <p><b>Age: </b>{age}</p>
          <p><b>Address: </b>{address}</p>
          <p><b>Email: </b>{email}</p>
          <p><b>Phone: </b>{phone}</p>
        </div>
      </div>
      
  );
}

export default Card;
