import React, { useState  } from 'react'
import { data }  from '../data/data.js'

const Food = () => {
  const [food,setFood] = useState(data)

  {/* Filter Type */}
  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category
      })
    )
  }

  {/* Filter Price */}
  const filterPrice = (price) => {
      setFood(
        data.filter((item) => {
          return item.price === price
        } )
      )
  }

  return (
    <div className='max-w-[1640px] w-full h-full px-4 py-6'>
      <h1 className='font-bold text-orange-600 text-4xl text-center'>Top Rated Menu Items</h1>

      {/* Filter Type */}
      <div  className='flex flex-col lg:flex-row justify-between'>
      <div>
        <p className='font-bold text-gray-600'>Filter Type</p>
        <div className='flex justify-between flex-wrap'>
          <button onClick={() => setFood(data)} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-600 hover:text-white'>All</button>
          <button onClick={() => filterType('burger')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-600 hover:text-white'>Burgers</button>
          <button onClick={() => filterType('pizza')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-600 hover:text-white'>Pizza</button>
          <button onClick={() => filterType('salad')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-600 hover:text-white'>Salads</button>
          <button onClick={() => filterType('chicken')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-600 hover:text-white'>Chicken</button>
        </div>
      </div>

    {/* Filter Price */}
      <div>
        <p className='font-bold text-gray-600'>Filter Price</p>
        <div className='flex justify-between max-w-[390px] w-full'>
          <button onClick={() => filterPrice('$')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-600 hover:text-white'>$</button>
          <button onClick={() => filterPrice('$$')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-600 hover:text-white'>$$</button>
          <button onClick={() => filterPrice('$$$')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-600 hover:text-white'>$$$</button>
          <button onClick={() => filterPrice('$$$$')} className='border-orange-500 text-orange-500 m-1 hover:bg-orange-600 hover:text-white'>$$$$</button>
        </div>
      </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-5 gap-6'>
        {food.map(({id,name,category,image,price}) => {
          return <div key={id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={image} alt={name} className='w-full h-[200px] rounded-t-lg object-cover'/>
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{name}</p>
              <p>
                <span className='text-white bg-orange-600 px-3 py-1 rounded-full'>{price}</span>
              </p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Food