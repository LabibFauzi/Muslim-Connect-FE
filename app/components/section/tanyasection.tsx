import Link from 'next/link'
import React from 'react'
const  Tanyasection = () => {
return (
    <>
        <div className='flex flex-col bg-white w-1/2 h-56 rounded-2xl p-4 gap-2 drop-shadow-md hover:drop-shadow-2xl duration-300 cursor-default'>
            <div className='flex flex-row h-16 justify-between items-center'>
                <div className='flex gap-4'>
                    <img src="/asets/profile.png" alt="" className='flex w-10 h-10 ' />
                <div className='flex flex-col '>
                    <h1 className='font-bold text-sm'>Labib Fauzi</h1>
                    <h1 className='font-bold text-sm text-neutural'>1 jam yang lalu</h1>
                </div>
                </div>
            </div>
            <div className='ml-14 flex flex-col gap-10 '>
                <Link className='font-bold text-xl' href='/menjawab'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolore.</Link>
                <Link  className='font-bold text-xl text-secondarymain hover:text-secondaryhover duration-150' href='/menjawab'>Jawab</Link>
            </div>
        
        </div>
    </>

)
}

export default Tanyasection