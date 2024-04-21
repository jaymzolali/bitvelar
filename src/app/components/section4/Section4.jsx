import React from 'react'
import './section4.css'
import { Lists } from './DataSec4'

const Section4 = () => {
  return (
    <div className='section4 m-4 rounded-lg'>
        <div className="graph-img"></div>
        <div className="sec3-HIW mx-4">
            <h3 className='text-[purple] font-extrabold'>HOW IT WORKS</h3>
            <h1 className='text-2xl mb-5 font-bold'>A few easy steps</h1>
            <div>
                {Lists.map(list =>
                    <div key={list.id} className='bg-white mb-3 rounded-lg p-4 shadow-lg'>
                        <div className='flex mb-3'>
                            <h2 className='rounded-[50%] border w-8 border-purple-600 p-2'>{list.num}</h2>
                            <h3 className='grid font-bold place-content-center ml-4'>{list.name}</h3>
                        </div>
                        <hr />
                        <p className='mt-3'>{list.para}</p>
                    </div>)}
            </div>
        </div>
    </div>
  )
}

export default Section4