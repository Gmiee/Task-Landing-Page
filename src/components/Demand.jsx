import React from 'react'

const Demand = () => {
  return (
    <>
      <div className="main bg-[#f6f6f6] w-full h-full">
      <div className='germany text-sm md:text-4xl text-blue-900 font-bold flex justify-start md:mx-[20rem] mx-10 py-14 flex-col'>
        <p className='my-7 capitalize'>Occupation in demand 2023</p>
        <div className='flex gap-3 w-full '>
            <div className='left'>
            <button className='bg-blue-900 text-white text-xl w-full p-2 text-start'>Occupation</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>Computer Science / IT and software Development</button><br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>Electronics Engineering</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>Mechanical Engineering</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>Account Management and business analytics</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>Nursing and Healthcare</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>Civil Engineering and architecture</button> <br />
            </div>
            <div className='right'>
            <button className='bg-blue-900 text-white text-xl w-96 p-2 text-start capitalize'>Average Yearly salary in euros</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>85,800</button><br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>60,936</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>62000</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>55000</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>33654 to 65000</button> <br />
            <button className='text-xl bg-white text-blue-900 p-2 w-full text-start'>62466</button> <br />
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Demand
