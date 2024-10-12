import React from 'react';
import Card from './components/Card'
import useProductDetails from './hooks/useProductDetails';

function App() {
  const {data} = useProductDetails() 
  console.log(data);
  
  
  return (
    <>
    <h1 className='bg-yellow-400 text-center text-4xl font-bold p-6 text-white'>Product List</h1>

    <div className='p-8 grid grid-cols-5 gap-10 bg-blue-400'>
      {data?.map((product) => (
        <Card key={product?.id} product={product}/>
      ))}
    </div>
    
    </>
  )
}

export default App
