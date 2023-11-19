import React from 'react'
import { categories } from '../data/data.js'

const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto py-12 px-4'>
    <h1 className='font-bold text-orange-600 text-center text-4xl'>Top Rated Menu Items</h1>
    {/* Categories */}

    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
      {categories.map(({id,name,image})=> {
        return <div key={id} className='bg-gray-200 rounded-lg p-4 flex justify-between items-center'>
        <h2 className='font-bold sm:text-xl'>{name}</h2>
        <img src={image} alt={name} className='w-20'/>
      </div>
      })}
    </div>
    
    </div>
  )
}

export default Category