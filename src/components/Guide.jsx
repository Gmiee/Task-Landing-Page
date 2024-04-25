import React from 'react'
import img from '../assets/img.png'
const Guide = () => {
    return (
        <>
            <div className='germany text-sm md:text-4xl text-blue-900 font-bold flex justify-start md:mx-[20rem] mx-10 flex-col'>
               <div className="main flex ">
               <div className='flex flex-col py-20 '>
                    <p className='my-7 capitalize'>How Rao Cunsultants can be your Guide ?</p>
                    <p className='text-base font-medium flex flex-wrap'>At Rao Consultants, we are dedicated to making your dreams come true. Our experienced team of
                    immigration experts will guide you through every step of the visa application process, ensuring a
                    smooth   and hassle-free experience.</p>
                </div>
                <div className='h-full w-full'>
                    <img src={img} alt="" />
               </div>
                </div>

            </div>
        </>
    )
}

export default Guide
