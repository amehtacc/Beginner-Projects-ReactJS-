import React from 'react'


function Card({product}) {
    // console.log(data);

    function lengthShortner(string) {
        return `${string.slice(0, 40)}...`
    }
    
    
  return (
    <>
        <div className='h-max shadow-lg rounded-md flex flex-col items-center bg-white'> 
            <div className='p-2'>
                <div className='relative flex justify-center '>
                <span className='absolute left-2 top-2 bg-green-300 px-2 py-1 rounded-md font-semibold'>In Stock</span>
                <img className='w-60 h-60 rounded-md cursor-pointer' src={product?.thumbnail} alt="" />
                </div>
                <h2 className='font-bold text-base mb-3 mt-3 text-center cursor-pointer'>{product?.title}</h2>
                <p className='text-center text-gray-500 text-sm mb-2'>{lengthShortner(product?.description)}</p>
                <p className='text-center text-xl font-bold'>{`₹${product?.price}.00`}</p>
            </div>
            <button className='w-full py-3 bg-red-500 rounded-b-md font-bold text-white mt-2'>Buy Now</button>
        </div>
    </>
  )
}

export default Card